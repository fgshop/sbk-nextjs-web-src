// import Banner from "@/components/Del_GymCoaching/Banner";
// import DigitalFitnessCoaching from "@/components/Del_GymCoaching/DigitalFitnessCoaching";
// import DownloadTheApp from "@/components/Del_GymCoaching/DownloadTheApp";
// import Features from "@/components/Del_GymCoaching/Features";
// import FeedbackSlider from "@/components/Del_GymCoaching/FeedbackSlider";
// import FunFacts from "@/components/Del_GymCoaching/FunFacts";
// import Instructor from "@/components/Del_GymCoaching/Instructor";
// import LatestBlogPost from "@/components/Del_GymCoaching/LatestBlogPost";
// import TopSellingCourses from "@/components/Del_GymCoaching/TopSellingCourses";
// import WhyChooseUs from "@/components/Del_GymCoaching/WhyChooseUs";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();

	return (
		<>
			{/* <Banner />
			<Features />
			<WhyChooseUs />
			<TopSellingCourses courses={courses} />
			<FunFacts />
			<FeedbackSlider />
			<Instructor />
			<DownloadTheApp />
			<LatestBlogPost />
			<DigitalFitnessCoaching /> */}
		</>
	);
};

export default page;
