import CoursesContent from "@/components/Courses/CoursesContent";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import { getCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

export const metadata = {
	title: "Courses |  Seed Academy",
};

const page = async ({ searchParams }) => {
	const { courses } = await getCourses(searchParams);
	const currentUser = await getCurrentUser();
	return (
		<>
			<PageBanner
				pageTitle="강의전체"
				homePageUrl="/"
				homePageText="Home"
				activePageText="강의전체"
			/>
			<CoursesContent courses={courses} currentUser={currentUser} />
		</>
	);
};

export default page;
