"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect } from "next/navigation";


const RegisterForm = () => {

	const [isLoading, setIsLoading] = useState(false);
	
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			account: "",
			password: "",
			name: "",
			phone: "",
			school: ""
		},
	});

	const onSubmit = async (data) => {
		const { name, account, password, repassword,  phone, school } = data;
		const teacher = document.getElementById("teacher").checked ? "1" : "";
		const student = document.getElementById("student").checked ? "2" : "";

		console.log("type", data.teacher);
		const url = teacher === "1" ? "/users/teacher/signUp" : "/users/student/signUp";
		
		if (!teacher && !student) {
			toast.error("Please select the user type");
			return;
		}
		if (!name) {
			toast.error("Please enter user name");
			return;
		}
		if (!account) {
			toast.error("Please enter user email");
			return;
		}
		if (password !== repassword) {
			toast.error("Passwords do not match");
			return;
		}
		if (!phone) {
			toast.error("Please enter user phone");
			return;
		}
		if (!school) {
			toast.error("Please enter user school");
			return;
		}
		setIsLoading(true);
		await axios
			// .post("/api/register", data)
			.post(process.env.NEXT_PUBLIC_AUTH_URL+url, data)
			.then((response) => {
				toast.success("Registration success! Please login.");
				redirect("/auth/signin");
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="register-form">
			<h5>Signup</h5>

			<form onSubmit={handleSubmit(onSubmit)}>


				<div className="row align-items-center mt-3">
					
					<div className="col-md-12 mt-3 mb-3">
						<label className="form-label">
							회원구분
						</label>
						<div className='d-flex align-items-center mt-3'>
							<input type="radio" name="usertype" id="teacher"  value="1" className="me-1"/>
							<label htmlFor="teacher">교사</label>
							<input type="radio" name="usertype" id="student" value="2" className="ms-2 me-1"/>
							<label htmlFor="student">학생</label>
						</div>
					</div>
					<div className="col-md-6">
						<Input
							label="이름"
							id="name"
							type="text"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
					<div className="col-md-6">
						<Input
							label="이메일"
							id="account"
							type="email"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
					<div className="col-md-6">
						<Input
							label="비밀번호"
							id="password"
							type="password"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
					<div className="col-md-6">
						<Input
							label="비밀번호확인"
							id="repassword"
							type="password"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
					<div className="col-md-6">
						<Input
							label="휴대폰번호"
							id="phone"
							type="text"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
					<div className="col-md-6">
						<Input
							label="학교명"
							id="school"
							type="text"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
					</div>
													
					{/* <p className="description">
						The password should be at least eight characters long. To
						make it stronger, use upper and lower case letters, numbers,
						and symbols like ! " ? $ % ^ & )
					</p> */}

					<button type="submit" disabled={isLoading}>
						{isLoading ? "Please wait..." : "Signup"}
					</button>

					<div className="row align-items-center mt-3">
						<div className="col-lg-6 col-md-6 col-sm-6 signin-wrap">
							<Link href="/auth/signin" className="signin">
								이미 회원 이신가요? Signin
							</Link>
						</div>
					</div>
					
				</div>

			</form>
		</div>
	);
};

export default RegisterForm;
