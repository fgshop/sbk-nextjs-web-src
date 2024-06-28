// import AboutArea from "@/components/Del_DistanceLearning/AboutArea";
// import Banner from "@/components/Del_DistanceLearning/Banner";
// import CourseAdvisor from "@/components/Del_DistanceLearning/CourseAdvisor";
// import CoursesArea from "@/components/Del_DistanceLearning/CoursesArea";
// import Features from "@/components/Del_DistanceLearning/Features";
// import FeedbackSlider from "@/components/Del_DistanceLearning/FeedbackSlider";
// import PopularCourses from "@/components/Del_DistanceLearning/PopularCourses";
import PremiumAccess from "@/components/OnlineTrainingSchool/PremiumAccess";
import FunFactsThree from "@/components/Shared/FunFactsThree";
import LatestNews from "@/components/Shared/LatestNews";
import Partner from "@/components/Shared/Partner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			{/* <Banner />
			<Features />
			<CoursesArea />
			<AboutArea />
			<FunFactsThree />
			<PopularCourses courses={courses} />
			<FeedbackSlider />
			<CourseAdvisor /> */}
			<PremiumAccess />
			<Partner mainClsAtts="partner-area bg-f0f2f5 ptb-70" />
			<LatestNews />
			<SubscribeForm />
		</>
	);
};

export default page;
