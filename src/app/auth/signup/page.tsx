import { getCurrentUser } from "@/actions/getCurrentUser";
import RegisterForm from "@/components/Auth/RegisterForm";
import PageBanner from "@/components/Shared/PageBanner";
import { redirect } from "next/navigation";

const page = async () => {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect("/");
	}
	return (
		<>
			<PageBanner
				pageTitle="Signup"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Signup"
			/>

			<div className="profile-authentication-area ptb-50">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-12">
							<RegisterForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
