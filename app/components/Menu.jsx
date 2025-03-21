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
				className={`size-full flex justify-center items-center bg-background transition-all duration-500 ${
					props.open ? "opacity-100" : "opacity-0"
				}`}
			>
				<ul className="responsive-padding flex flex-col items-center justify-center w-full max-w-[1280px] hover:text-opacity-50">
					{menuItems.map((item, index) => (
						<li key={index} className="w-full">
							<a href={item.href} onClick={props.closeMenu}>
								<div className="w-full flex justify-between">
									<p className="font-sans text-[1rem]">{index}</p>
									<h3 className="text-xl md:text-2xl lg:text-4xl">
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
