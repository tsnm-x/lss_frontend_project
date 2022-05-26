/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["ddragon.leagueoflegends.com"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
