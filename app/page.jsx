import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<div className="flex flex-col responsive-padding overflow-hidden">
			<Navbar />
			<Hero />
			<div className="h-screen" id="projects">
				Projects
			</div>
		</div>
	);
}
