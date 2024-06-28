import Links from "../Links";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyFavorites } from "@/actions/getMyFavorites";
import CourseCard from "@/components/Shared/CourseCard";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Learning | uFlower Seed Academy",
};

const Page = async () => {
	const currentUser = await getCurrentUser();
	const { favourites } = await getMyFavorites();

	return (
		<>
			<PageBanner
				pageTitle="관심강의"
				homePageUrl="/"
				homePageText="Home"
				activePageText="관심강의"
			/>
			<div className="ptb-50">
				<div className="container">
					<Links currentUser={currentUser} />

					<div className="row">
						{favourites.length > 0 ? (
							favourites.map((fav) => {
								const course = fav.course;
								return (
									<CourseCard
										key={fav.id}
										{...course}
										currentUser={currentUser}
									/>
								);
							})
						) : (
							<div className="col-lg-12 col-md-12">
								<div className="text-center border py-3 fs-5">
									Empty
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
