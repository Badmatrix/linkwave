/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: {
				100: "#EFEBFF",
				200: "#BEADFF",
				300: "#633CFF",
			},
			dark: {
				100: "#FAFAFA",
				200: "#D9D9D9",
				300: "#737373",
				400: "#333333",
			},
			danger: "#FF3939",
			white: "#FFFFFF",
		},
		fontFamily: {
			sans: ["Instrument Sans", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
});
