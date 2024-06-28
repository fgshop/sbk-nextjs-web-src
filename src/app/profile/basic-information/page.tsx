import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Links from "../Links";
import InfoForm from "./InfoForm";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Profile | uFlower Seed Academy",
};


const Page = async () => {
	const currentUser = await getCurrentUser();
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

					<div className="basic-profile-information-form">
						<InfoForm currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
