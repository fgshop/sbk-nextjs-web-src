"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

const UserMenu = ({ currentUser }) => {
	const isAdmin = currentUser?.role === "ADMIN";

	const dummyImage =
		"https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg";

	useEffect(() => {
		console.log('currentUser: ' + JSON.stringify(currentUser));
	},[]);

	return (
		<>
			{!currentUser?.email && (
				<div className="option-item">
					<Link href="/auth/signin" className="default-btn">
						<i className="flaticon-user"></i>Signin{" "}
						<span></span>
					</Link>
				</div>
			)}
			{currentUser && (
				<>
					<div className="option-item">
						<div className="dropdown profile-dropdown">
							<div className="img ptb-15">
								<Image
									src={
										currentUser.image
											? currentUser.image
											: dummyImage
									}
									alt="Admin"
									width={35}
									height={35}
								/>
							</div>

							<ul className="dropdown-menu">
								<li>
									<Link
										className="dropdown-item author-dropdown-item"
										href="/profile/basic-information/"
									>
										<div className="d-flex align-items-center">
											<div className="img">
												<Image
													src={
														currentUser.image
															? currentUser.image
															: dummyImage
													}
													alt="Admin"
													width={35}
													height={35}
												/>
											</div>

											<span className="ps-3">
												<span className="fw-semibold fs-16 mb-1 d-block">
													{currentUser.name}
												</span>
												<span className="d-block fs-13 mt-minus-2">
													{currentUser.email}
												</span>
											</span>
										</div>
									</Link>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>

								{isAdmin ? (
									<li>
										<Link
											className="dropdown-item"
											href="/admin/"
										>
											<i className="bx bxs-dashboard"></i>{" "}
											Dashboard
										</Link>
									</li>
								) : null}

								{ currentUser?.role === 'AGENCY' ? (
									<>
										<li>
											<Link
												className="dropdown-item"
												href="/instructor/courses"
											>
												<i className="bx bxs-dashboard"></i> 나의강의
											</Link>
										</li>
									</>
								) : ( currentUser?.role === 'USER' ? (
									<>
										<li>
											<Link
												className="dropdown-item"
												href="/learning/my-courses/"
											>
												<i className="bx bx-book"></i> 나의강의
											</Link>
										</li>

										<li>
											<Link
												className="dropdown-item"
												href="/learning/my-purchase-history/"
											>
												<i className="bx bx-credit-card-front"></i> 강의신청내역
											</Link>
										</li>
									</>
								) : (
									<></>
								))}
								
								<li>
									<Link
										className="dropdown-item"
										href="/profile/basic-information/"
									>
										<i className="bx bx-user-circle"></i> 계정설정
									</Link>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>

								<li>
									<button
										type="submit"
										className="dropdown-item"
										onClick={() => signOut()}
									>
										<i className="bx bx-log-out"></i> 로그아웃
									</button>
								</li>
							</ul>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default UserMenu;
