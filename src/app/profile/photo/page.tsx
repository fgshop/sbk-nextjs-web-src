import React from "react";
import Image from "next/image";
import Links from "../Links";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ProfilePhotoForm from "./ProfilePhotoForm";
import PageBanner from "@/components/Shared/PageBanner";
import { redirect } from "next/navigation";

export const metadata = {
	title: "My Profile | Smartbeauty Koreay",
};


const Page = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	
	return (
		<>
			<PageBanner
				pageTitle="프로필 & 계정설정"
				homePageUrl="/"
				homePageText="Home"
				activePageText="프로필 & 계정설정"
			/>
			<div className="ptb-50">
				<div className="container">
					<Links currentUser={currentUser} />

					<ProfilePhotoForm currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default Page;
