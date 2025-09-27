import React from "react";

export default function BoxWithIcon({
	title,
	image,
	description,
	accentColor,
}) {
	return (
		<div className="flex items-center min-h-[78px] rounded-lg p-[11px] bg-[#262626]">
			<div
				style={{ backgroundColor: `${accentColor}33` }}
				className="flex w-[3.5rem] h-[3.5rem] p-3 rounded-lg"
			>
				<img
					src={image}
					alt={`${title} icon`}
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="pl-[11px] flex flex-col">
				<p className="text-base font-sans font-bold">{title}</p>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
}
