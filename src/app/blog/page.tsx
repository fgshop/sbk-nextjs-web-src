import Content from "@/components/Blog/Content";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="공지사항"
				homePageUrl="/"
				homePageText="Home"
				activePageText="공지사항"
			/>
			<Content />
		</>
	);
};

export default page;
