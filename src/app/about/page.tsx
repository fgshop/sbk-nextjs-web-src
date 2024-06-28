import PageBanner from "@/components/Shared/PageBanner";
import AboutUs from "@/components/About/AboutUs";
//import FeedbackSliderWithFunFacts from "@/components/Del_eLearningSchool/FeedbackSliderWithFunFacts";
//import Features from "@/components/Del_eLearningSchool/Features";
import CourseAdvisor from "@/components/VendorCertificationTraining/CourseAdvisor";
import PremiumAccess from "@/components/OnlineTrainingSchool/PremiumAccess";
import Partner from "@/components/Shared/Partner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
			/>
			<AboutUs />
			{/* <FeedbackSliderWithFunFacts /> */}
			{/* <Features /> */}
			<CourseAdvisor />
			<PremiumAccess />
			<Partner />
		</>
	);
};

export default page;
