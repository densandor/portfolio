import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<div className="w-screen overflow-hidden">
			<div className="flex flex-col px-(--padding-sm) md:px-(--padding-md) lg:px-(--padding-lg)">
				<Navbar />
				<Hero />
				<div className="h-screen" id="projects">
					Projects
				</div>
			</div>
		</div>
	);
}
