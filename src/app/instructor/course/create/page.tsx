import React from "react";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Header from "../Header";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Class | uFlower Seed Academy",
};


const Page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<PageBanner
				pageTitle="나의강의 / 강의등록"
				homePageUrl="/"
				homePageText="Home"
				activePageText="나의강의 / 강의등록"
			/>
			<div className="ptb-50">
				<div className="container">

					<Header />

					<div className="create-course-form">
						<CourseCreateForm currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
