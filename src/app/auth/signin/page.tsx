import { getCurrentUser } from "@/actions/getCurrentUser";
import LoginForm from "@/components/Auth/LoginForm";
import PageBanner from "@/components/Shared/PageBanner";
import { redirect } from "next/navigation";

const page = async () => {
	// const currentUser = await getCurrentUser();
	// if (currentUser) {
	// 	redirect("/");
	// }
	return (
		<>
			<PageBanner
				pageTitle="로그인"
				homePageUrl="/"
				homePageText="Home"
				activePageText="로그인"
			/>

			<div className="profile-authentication-area ptb-50">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-12">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
