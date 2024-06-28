"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";

const Links = ({ currentUser }) => {
	const pathname = usePathname();

	useEffect(() => {
		if (!currentUser) {
			redirect("/auth");
		}
	}, [currentUser]);
	return (
		<>
			<ul className="nav-style1">
				<li>
					<Link
						className={
							pathname === "/learning/my-courses"
								? "active"
								: null
						}
						href="/learning/my-courses"
					>
						전체강의
					</Link>
				</li>
				<li>
					<Link
						className={
							pathname === "/learning/wishlist" ? "active" : null
						}
						href="/learning/wishlist"
					>
						관심강의
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Links;
