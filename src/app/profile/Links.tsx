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
							pathname === "/profile/basic-information"
								? "active"
								: null
						}
						href="/profile/basic-information/"
					>
						프로필
					</Link>
				</li>
				<li>
					<Link
						className={
							pathname === "/profile/photo" ? "active" : null
						}
						href="/profile/photo/"
					>
						프로필사진
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Links;
