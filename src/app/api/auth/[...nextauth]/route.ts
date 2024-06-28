
import NextAuth, { NextAuthOptions } from "next-auth/next";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import KakaoProvider from 'next-auth/providers/kakao';
// import NaverProvider from 'next-auth/providers/naver';
// import LineProvider from 'next-auth/providers/line';
// import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions }  from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "아이디", type: "text", placeholder: "아이디를 입력하세요." },
				password: { label: "비밀번호", type: "password", placeholder: "비밀번호를 입력하세요." },
				type: { label: "유저타입", type: "text", placeholder: "1: 교사, 2: 학생" }
			},
			async authorize(credentials: any,req) {
				const url = process.env.NEXT_PUBLIC_AUTH_URL+ "/auth/token";
				const res = await fetch(url, {
					method: "POST",
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body : new URLSearchParams({
						"grant_type" : "password",
						"scope" : "read write",
						"client_id" : "uflower",
						"username" : credentials.email,
						"password" : credentials.password,
						"type" : credentials.type
					})
				});

				if(res.status === 200){
					const data = await res.json();
					return { account: credentials.username, access_token: data.access_token, refresh_token: data.refresh_token, expires_in: data.expires_in }  
				} 
				else {
					return null;
				}

				/*
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user?.hashedPassword) {
					throw new Error("Invalid credentials");
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error("Invalid credentials");
				}
				*/
			}
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { jwt: true },
	callbacks: {
		async signIn(user, account, profile, email, credential) {
			// return Promise.resolve("/");
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
			  return true
			} else {
			  // Return false to display a default error message
			  return false
			  // Or you can return a URL to redirect to:
			  // return '/unauthorized'
			}
		},
		
		async jwt({ token, user, account, profile /* , isNewUser, trigger */ }) {
			const provider = account?.provider;
			if(provider == "credentials"){
	  
			  const decoded = jwt.decode(user?.access_token,{complete:true});

				token.id = decoded?.payload?.xid;
			  token.email = decoded?.payload?.sub;
			  token.name = decoded?.payload?.xnm;
			  token.sub = decoded?.payload?.sub;
			  token.role = jwt.decode(user?.access_token,{complete:true});
			  token.accessToken = user?.access_token;
			  token.refreshToken = user?.refresh_token;

				console.log(token.role);
	  
	
			} else if(provider == "kakao"){
	  
			} else if(provider == "naver"){
	  
			} else if(provider == "google"){
	  
			} else if(provider == "line"){
	  
			} else if(provider == "apple"){
	  
			}
			return token;
		},

		async session({ session, token, user }) {
			session.accessToken = token.accessToken;
			session.refreshToken = token.refreshToken;
			session.user.id = token.id;
			session.user.account = token.sub;
			session.user.email = token.sub;
			session.user.role = token.role;
			return session;
		}
	},
	pages: {
		signIn: "/auth/signin",
		signUp: "/auth/signup",
		signOut: "/auth/signout",
		error: "/auth",
	},
	// debug: process.env.NODE_ENV === "development",
	// session: {
	// 	strategy: "jwt",
	// },
	// secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
