import "./globals.css";

export const metadata = {
	title: "Sandor Den",
	description: "My personal portfolio website.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
