import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-small': "url('/hero-small.jpg')",
				'hero-big': "url('/hero-big.jpg')",
			},
			fontFamily: {
				logoFont: ['VT323', 'monospace'],
			},
		},
	},
	plugins: [],
};
export default config;
