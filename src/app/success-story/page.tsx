import PageBanner from "@/components/Shared/PageBanner";
import IntroVideo from "@/components/SuccessStory/IntroVideo";
import Testimonials from "@/components/SuccessStory/Testimonials";
import OurStory from "@/components/SuccessStory/OurStory";
import SuccessfulStudents from "@/components/SuccessStory/SuccessfulStudents";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Success Story"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Success Story"
			/>
			<IntroVideo />
			<Testimonials />
			<OurStory />
			<SuccessfulStudents />
		</>
	);
};

export default page;
