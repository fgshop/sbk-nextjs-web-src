import React from "react";
import Link from "next/link";
import EditCourseForm from "@/components/Instructor/EditCourseForm";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Class | Smartbeauty Koreay",
};


const Page = async ({ params }) => {
	const { course } = await getCourseById(params);

	// console.log(course);
	return (
		<>
			<PageBanner
				pageTitle="나의강의 / 강의수정"
				homePageUrl="/"
				homePageText="Home"
				activePageText="나의강의 / 강의수정"
			/>
			<div className="ptb-50">
				<div className="container">
					<h2 className="fw-bold mb-4">{course[0].title}</h2>

					<Header />

					<div className="create-course-form">
						<EditCourseForm course={course} params={params} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
