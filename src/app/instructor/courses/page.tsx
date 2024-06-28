import React from "react";
import Link from "next/link";
// import InstructorHeader from "@/components/Instructor/InstructorHeader";
import Image from "next/image";
import { myCourses } from "@/actions/myCourses";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "My Class | uFlower Seed Academy",
};


const Page = async () => {
	const { courses } = await myCourses();
	return (
		<>
			{/* <InstructorHeader /> */}

			<PageBanner
				pageTitle="나의강의"
				homePageUrl="/"
				homePageText="Home"
				activePageText="나의강의"
			/>
			<div className="ptb-50">
				<div className="container">
					<div className="row align-items-center my-course">
						<div className="col-md-6">
							
						</div>
						<div className="col-md-6">
							<div className="text-end">
								<Link
									className="default-btn"
									href="/instructor/course/create/"
								>
									<i className="flaticon-user"></i> 강의등록{" "}
									<span></span>
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						{courses.map((course) => (
							<div key={course.id} className="col-lg-4 col-md-6">
								<div className="single-courses-box">
									<div className="courses-image">
										<Link
											className="d-block image"
											href={`/course/${course.slug}/${course.id}`}
										>
											<Image
												src={course.image}
												alt="image"
												width={750}
												height={500}
											/>
										</Link>

										<div className="dropdown action-dropdown">
											<div className="icon">
												<i className="bx bx-dots-vertical-rounded"></i>
											</div>
											<ul className="dropdown-menu">
												<li>
													<Link
														className="dropdown-item"
														href={`/instructor/course/${course.id}/edit`}
													>
														{" "}
														<i className="bx bx-edit"></i>{" "}
														강의수정
													</Link>
												</li>
												<li>
													<Link
														className="dropdown-item"
														href={`/instructor/course/${course.id}/videos`}
													>
														<i className="bx bx-cloud-upload"></i>{" "}
														동영상업로드
													</Link>
												</li>

												<li>
													<Link
														className="dropdown-item"
														href={`/instructor/course/${course.id}/assets`}
													>
														<i className="bx bxs-file-plus"></i>{" "}
														강의자료업로드
													</Link>
												</li>
												<li>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="dropdown-item"
															disabled=""
														>
															<i className="bx bxs-trash"></i>{" "}
															~ 삭제{" "}
															<i
																className="bx bx-info-circle"
																style={{
																	left: "5px",
																	position:
																		"relative",
																	top: "2px",
																}}
															></i>
														</button>
													</div>
												</li>
											</ul>
										</div>

										<div className="price shadow discount-price">
											<del>${course.before_price}</del>
										</div>
										<div className="price shadow">
											${course.regular_price}
										</div>
									</div>

									<div className="courses-content">
										<div className="course-author d-flex align-items-center">
											<Image
												src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg"
												className="rounded-circle"
												alt="Instructor1"
												width={35}
												height={35}
											/>
											<span>{course.user.name}</span>
										</div>

										<h3>
											<Link
												href={`/course/${course.slug}/${course.id}`}
											>
												{course.title}
											</Link>
										</h3>

										<ul className="courses-box-footer d-flex justify-content-between align-items-center">
											<li>
												<i className="flaticon-agenda"></i>{" "}
												{course.lessons} Lessons
											</li>
											<li>
												<i className="flaticon-people"></i>{" "}
												8 Students
											</li>
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
