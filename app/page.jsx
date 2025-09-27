import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";

export default function Home() {
	return (
		<div className="flex flex-col responsive-padding overflow-hidden">
			<Navbar />
			<div className="flex flex-col w-full responsive-max-width">
				<Hero />
				<Experiences />
				<Technologies />
			</div>
		</div>
	);
}
