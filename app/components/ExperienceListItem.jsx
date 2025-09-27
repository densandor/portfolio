import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

export default function ExperienceListItem({ company, jobTitle, link }) {
	return (
		<div className="w-full flex items-center justify-between p-(--padding-sm) md:p-(--padding-md)">
			<div className="flex flex-col">
				<h3 className="text-xl md:text-2xl font-normal">{company}</h3>
				<h4 className="text-lg md:text-xl font-normal">{jobTitle}</h4>
			</div>
			<div>
				<a href={link}>
					<FiArrowUpRight size={48} />
				</a>
			</div>
		</div>
	);
}
