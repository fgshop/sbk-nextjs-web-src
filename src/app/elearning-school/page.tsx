import React from "react";
// import AboutUs from "@/components/Del_eLearningSchool/AboutUs";
// import Banner from "@/components/Del_eLearningSchool/Banner";
// import Features from "@/components/Del_eLearningSchool/Features";
// import FeedbackSliderWithFunFacts from "@/components/Del_eLearningSchool/FeedbackSliderWithFunFacts";
// import GetInstantCourses from "@/components/Del_eLearningSchool/GetInstantCourses";
// import Partner from "@/components/Del_eLearningSchool/Partner";
// import PopularCourses from "@/components/Del_eLearningSchool/PopularCourses";
// import LatestNews from "@/components/Shared/LatestNews";
// import ViewAllCourses from "@/components/Del_eLearningSchool/ViewAllCourses";
// import AffordableCertification from "@/components/Del_eLearningSchool/AffordableCertification";
import { getHomepageCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => {
	const { courses } = await getHomepageCourses();
	const currentUser = await getCurrentUser();
	return (
		<>
			{/* <Banner courses={courses} currentUser={currentUser} />
			<Partner />
			<Features />
			<AboutUs />
			<PopularCourses courses={courses} currentUser={currentUser} />
			<FeedbackSliderWithFunFacts />
			<GetInstantCourses />
			<LatestNews />
			<ViewAllCourses />
			<AffordableCertification /> */}
		</>
	);
};

export default page;
