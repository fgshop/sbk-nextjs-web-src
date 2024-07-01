/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
    ignoreBuildErrors: true,
  },
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
			"hass.co.kr",
			"www.hass.co.kr",
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f21gftybjsygg458086548a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "firstgleam",
		NEXT_CLOUDINARY_PRESET: "auto-tag",
		NEXT_CLOUDINARY_URL:"cloudinary//238816846811129:9QA0KArL_i0Sg8HI5FGIQv_4Bn0@firstgleam",
		// STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7",
		// STRIPE_SECRET_KEY: "sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk",
	},
};

//module.exports = nextConfig;
export default nextConfig;