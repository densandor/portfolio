export default function Menu(props) {
	const menuItems = [
		{ name: "Experience", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<div
			className={`fixed top-[calc(var(--nav-height)+1px)] left-0 bottom-0 right-0 ${
				props.open ? "pointer-events-all" : "pointer-events-none"
			}`}
		>
			<div
				className={`size-full flex justify-center items-center bg-background transition-opacity duration-(--custom-duration) ${
					props.open ? "opacity-100" : "opacity-0"
				}`}
			>
				<ul className="group/list responsive-padding flex flex-col items-center justify-center w-full max-w-[1280px]">
					{menuItems.map((item, index) => (
						<li key={index} className="group w-full">
							<a href={item.href} onClick={props.closeMenu} className="">
								<div className="w-full flex justify-between transition-all duration-(--custom-duration) group-hover/list:[&:not(:hover)]:opacity-50 ease-in-out">
									<p className="font-sans text-[1rem]">{index}</p>
									<h3 className="transition-transform duration-(--custom-duration) group-hover:-translate-x-4 text-xl md:text-2xl lg:text-4xl">
										{item.name}
									</h3>
								</div>
							</a>
							{index < menuItems.length - 1 && (
								<hr className="my-[2rem] text-foreground opacity-20" />
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
