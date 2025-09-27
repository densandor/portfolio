"use client";

import ExperienceListItem from "./ExperienceListItem";

export default function Experiences() {
	const experiences = [
		{
			id: 0,
			company: "Deloitte",
			jobTitle: "Technology Consulting Intern",
			link: "",
		},
		{
			id: 1,
			company: "University of Warwick",
			jobTitle: "Computer Science Student Ambassador",
			link: "",
		},
	];

	return (
		<div className="flex flex-col items-left py-(--padding-lg)" id="experience">
			<h3>Experience</h3>
			<div className="mt-(--padding-sm)"></div>
			<hr className="opacity-20 h-[1px]" />
			{experiences.map((experience) => (
				<div key={experience.id}>
					<ExperienceListItem {...experience} />
					<hr className="opacity-20 h-[1px]" />
				</div>
			))}
		</div>
	);
}
