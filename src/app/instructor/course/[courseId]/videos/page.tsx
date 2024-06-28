import React from "react";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import CourseVideos from "@/components/Instructor/CourseVideos";
import DeleteButton from "./DeleteButton";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Class | uFlower Seed Academy",
};

const Page = async ({ params }) => {
	const { course, videos } = await getCourseById(params);

	return (
		<>
			<PageBanner
				pageTitle="나의강의 / 동영상업로드"
				homePageUrl="/"
				homePageText="Home"
				activePageText="나의강의 / 동영상업로드"
			/>
			<div className="ptb-50">
				<div className="container">
					<h2 className="fw-bold mb-4">{course[0].title}</h2>

					<Header />

					<div className="create-course-form">
						<CourseVideos course={course} params={params} />
						<hr />
						<div className="row">
							{videos.map((vdo) => (
								<>
									<div className="col-md-3" key={vdo.id}>
										<div className="card">
											<video width="100%" controls>
												<source
													src={vdo.video_url}
													type="video/mp4"
												/>
												Your browser does not support
												HTML video.
											</video>

											<div className="card-body">
												<h6 className="card-title">
													{vdo.title}
												</h6>
												<DeleteButton
													videoId={vdo.id}
												/>
											</div>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
