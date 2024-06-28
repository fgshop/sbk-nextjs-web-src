"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const pathname = usePathname();
	if (pathname === "/coming-soon") {
		return;
	}

	return (
		<footer className="footer-area">
			<div className="container">
				<div className="footer-bottom-area">
					<div className="row align-items-center">
						<div className="col-lg-2 col-md-4">
							<Link href="/" className="navbar-brand">
								<Image
									src="/images/logo.png"
									width={180}
									height={57}
									alt="다꽃씨앗학교"
								/>
							</Link>
						</div>

						<div className="col-lg-10 col-md-8">
							<ul>
								<li>
									<i className="bx bx-copyright"></i>
									{currentYear} uFlower Seed Academy All rights reserved.
								</li>
								<li>
									<Link href="/privacy-policy">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/terms-of-service">
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* 
			<div className="lines">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			 */}
		</footer>
	);
};

export default Footer;
