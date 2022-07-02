/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["ddragon.leagueoflegends.com", "avatar.leagueoflegends.com"],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	future: { webpack5: true },
	async rewrites() {
		return [
			{
				source: "/riot.txt",
				destination: "/riot.txt",
			},
		];
	},
};

module.exports = nextConfig;
