"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="main-banner-wrapper">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="main-banner-wrapper-content">
							<h1>Achieve the Best Results with Academy</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							<Link href="/auth/signup" className="default-btn">
								<i className="flaticon-user"></i> Signup{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-7 col-md-12 pt-100">
						<div className="main-banner-wrapper-image text-center pt-50">
							<Image
								src="/images/banner-img3.png"
								width={750}
								height={622}
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-shape14">
				<Image
					src="/images/banner-shape15.png"
					width={200}
					height={236}
					alt="image"
				/>
			</div>
			<div className="banner-shape15">
				<Image
					src="/images/banner-shape16.png"
					width={120}
					height={166}
					alt="image"
				/>
			</div>
			<div className="banner-shape16">
				<Image
					src="/images/banner-shape17.png"
					width={110}
					height={104}
					alt="image"
				/>
			</div>
			<div className="banner-shape17">
				<Image
					src="/images/banner-shape18.png"
					width={208}
					height={294}
					alt="image"
				/>
			</div>
			<div className="banner-shape18">
				<Image
					src="/images/banner-shape19.png"
					width={75}
					height={103}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Banner;
