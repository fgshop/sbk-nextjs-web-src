import { getServerSession } from "next-auth/next";
//import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//import prisma from "../../libs/prismadb";

export async function getCurrentSession() {
	return await getServerSession(authOptions);
}

export async function getCurrentUser() {
	try {
		const session = await getCurrentSession();

		if (!session?.user) {
			return null;
		}

		const currentUser = session?.user;

		/*
		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
			include: {
				profile: true,
				favourites: true,
			},
		});
		*/

		if (!currentUser) {
			return null;
		}

		return {
			...currentUser,
			// created_at: currentUser.created_at.toISOString(),
			// updated_at: currentUser.created_at.toISOString(),
			// emailVerified: currentUser.created_at.toISOString() || null,
		};
	} catch (error) {
		return null;
	}
}
