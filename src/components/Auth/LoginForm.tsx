"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	  
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (!callback?.error) {
				toast.success("Signin 되었습니다.");
				router.push('/');
				router.refresh();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	return (
		<div className="login-form">
			<h5 >Signin</h5>

			<form onSubmit={handleSubmit(onSubmit)}>
				
				{/*
				--------------------------------------------------------------------------------------------------------------------------------
				이메일/비밀번호 방식의 Signin은 회원타입이 없어도 동작하도록 서버 수정해서 type은 없어도 됨 (SNS 최초 로그일할때 회원 type이 있어야 하는데 그건 나중에 생각해야 할듯)
				--------------------------------------------------------------------------------------------------------------------------------
				<div className='d-flex align-items-center mt-3'>
					<input type="radio" name="type" id="teacher" value={"1"} className="me-1" defaultChecked={true} />
					<label htmlFor="teacher">교사 Signin</label>
					<input type="radio" name="type" id="student" value={"2"} className="ms-2 me-1" />
					<label htmlFor="student">학생 Signin</label>
				</div>
				*/}

				<div className="row align-items-center mt-3">
					<Input
						label="아이디"
						id="email"
						type="email"
						name="email"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>

					<Input
						label="비밀번호"
						id="password"
						type="password"
						name="password"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
						<p>
							<input type="checkbox" id="test2" />
							<label htmlFor="test2">Signin 기억하기</label>
						</p>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
						<Link href="#" className="lost-your-password">
							비밀번호를 잊으셨나요? 비밀번호 찾기
						</Link>
					</div>
				</div>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Please wait..." : "Signin"}
				</button>

				<div className="row align-items-center mt-3">
					<div className="col-lg-6 col-md-6 col-sm-6 signup-wrap">
						<Link href="/auth/signup" className="signup">
							처음 방문하셨나요? Signup
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
