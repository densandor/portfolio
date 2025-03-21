"use client";

import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen((p) => !p);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	// Ensures no scrolling when the menu is open
	useEffect(() => {
		if (open) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [open]);

	return (
		<nav
			className={`w-full ${
				open ? "h-screen" : "h-[calc(1px + (--nav-height))]"
			} flex flex-col`}
		>
			<div className="h-(--nav-height) flex justify-between items-center ">
				<a
					href="/"
					className="w-[3rem] h-[3rem] group relative font-sans text-xl font-bold overflow-hidden transition-transform transform hover:scale-110"
				>
					sd
					{/* <div className="flex justify-around transition-transform duration-300 ease-out transform group-hover:translate-y-[-100%]">
						sd
					</div> */}
				</a>
				<div className="flex justify-center items-center overflow-hidden transition-transform transform hover:scale-110">
					<Hamburger
						className="transition-transform duration-300 ease-out hover: translate-y-[-100%]"
						color="var(--color-foreground)"
						toggled={open}
						distance="sm"
						rounded
						onToggle={toggleMenu}
					/>
				</div>
			</div>
			<hr className="opacity-20 h-[1px]" />
			{open && <div className="grow">Links</div>}
		</nav>
	);
}
