"use client";

import BoxWithIcon from "./BoxWithIcon";

export default function Technologies() {
	const technologies = [
		{
			id: 0,
			title: "Java",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
			description: "",
			accentColor: "#007396",
		},
		{
			id: 1,
			title: "Python",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
			description: "",
			accentColor: "#FFDE57",
		},
		{
			id: 2,
			title: "C",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
			description: "",
			accentColor: "#AABBCE",
		},
		{
			id: 3,
			title: "Node.js",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
			description: "",
			accentColor: "#66CC33",
		},
		{
			id: 4,
			title: "React",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			description: "",
			accentColor: "#61DBFB",
		},
		{
			id: 5,
			title: "JavaScript",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			description: "",
			accentColor: "#F0DB4F",
		},
		{
			id: 6,
			title: "Git",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
			description: "",
			accentColor: "#F1502F",
		},
		{
			id: 7,
			title: "Postman",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
			description: "",
			accentColor: "#EF5B25",
		},
		{
			id: 8,
			title: "PostgreSQL",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
			description: "",
			accentColor: "#0064A5",
		},
		{
			id: 9,
			title: "MySQL",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
			description: "",
			accentColor: "#00758F",
		},
		{
			id: 10,
			title: "Numpy",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
			description: "",
			accentColor: "#4C78D0",
		},
		{
			id: 11,
			title: "Matplotlib",
			image:
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
			description: "",
			accentColor: "#FFFFFF",
		},
	];

	return (
		<div className="flex flex-col items-left py-(--padding-lg)" id="skills">
			<h3>Technical skills</h3>
			<div className="py-(--padding-sm)">
				<p className="font-sans text-base"></p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{technologies.map((technology) => (
					<BoxWithIcon key={technology.id} {...technology} />
				))}
			</div>
		</div>
	);
}
