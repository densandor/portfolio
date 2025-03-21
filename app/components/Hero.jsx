"use client";

import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Hero() {
	//presets the size of the window variables
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	//sets the size state to the actual size of the window whenever it is changed
	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="h-[calc(100vh-var(--nav-height)-1px)] flex flex-col items-left md:items-center justify-center ">
			<p className="font-sans text-base text-left md:text-xl md:text-center">
				Hi, I'm
			</p>
			<div className="flex w-[calc(100% + 2*(var(--padding-sm)))] ml-[calc(-(var(--padding-sm)))] text-nowrap py-[1rem]">
				{size.width < 1025 ? (
					<ul className="flex animate-cycle -z-10">
						{Array.from({ length: 10 }, (_, i) => i).map((el) => (
							<li key={el} className="flex">
								<h1 className="text-2xl">Sandor Den -&nbsp;</h1>
							</li>
						))}
					</ul>
				) : (
					<h1 className="max-md:text-2xl">Sandor Den</h1>
				)}
			</div>
			<p className="font-sans text-base text-left md:text-xl md:text-center max-w-[940px]">
				Currently, I study Computer Science at the University of Warwick. I love
				learning new things and solving problems using tech.
			</p>
			<button className="mt-[2.5rem] w-[15rem] h-[5rem] flex items-center justify-center rounded-[100] border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] animate-shimmer">
				<a
					className="size-full flex items-center justify-center"
					href="#projects"
				>
					Check out my work
					<FaAngleRight />
				</a>
			</button>
		</div>
	);
}
