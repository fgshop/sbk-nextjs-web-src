"use client";

import React, { useState } from "react";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseAsset from "@/components/Learning/CourseAsset";
import CourseRating from "@/components/Learning/CourseRating";

const Content = ({ description, assets, reviews }) => {
	// console.log(reviews);
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<>
			<ul className="nav-style1 learning-course-nav">
				<li
					onClick={() => handleTabClick(0)}
					className={` ${activeTab === 0 ? "active" : ""}`}
				>
					강의안내
				</li>
				<li
					onClick={() => handleTabClick(1)}
					className={` ${activeTab === 1 ? "active" : ""}`}
				>
					강의자료
				</li>
				<li
					onClick={() => handleTabClick(2)}
					className={` ${activeTab === 2 ? "active" : ""}`}
				>
					리뷰
				</li>
			</ul>

			<div>
				{activeTab === 0 && (
					<CourseOverview description={description} />
				)}
				{activeTab === 1 && <CourseAsset assets={assets} />}
				{activeTab === 2 && <CourseRating reviews={reviews} />}
			</div>
		</>
	);
};

export default Content;
