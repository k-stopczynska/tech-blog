import React, { useState } from 'react';
import ProjectCard from '@/UI/ProjectCard';

const projects = [
	{ title: 'codegroove', img: '/city.jpg' },
	{ title: 'code quest', img: '/coder.jpg' },
	{ title: 'invoices', img: '/hard.jpg' },
	{ title: 'recruitment bot', img: '/imaginary_room2.jpg' },
	{ title: 'roulette', img: '/games.jpg' },
	{ title: 'vetcenter', img: '/door.jpg' },
];

const Projects = () => {
	const fadeIn = 'object-fill img-fade-in';
	const fadeOut = 'object-fill img-fade-out';
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [classes, setClasses] = useState(fadeOut);

	const handleMouseEnter = (index: number) => {
		setHoveredProject((prevHoveredProject) =>
			prevHoveredProject === index ? prevHoveredProject : index,
		);
		setClasses((prev) => (prev === fadeIn ? prev : fadeIn));
	};

	const handleMouseLeave = () => {
		setClasses((prev) => (prev === fadeOut ? prev : fadeOut));
	};

	const handleFocus = (index: number) => {
		setHoveredProject((prevHoveredProject) =>
			prevHoveredProject === index ? prevHoveredProject : index,
		);
		setClasses((prev) => (prev === fadeIn ? prev : fadeIn));
	};

	const handleBlur = () => {
		setClasses((prev) => (prev === fadeOut ? prev : fadeOut));
	};

	return (
		<div className='flex items-center justify-between gap-8 max-w-[800px] min-h-[600px]'>
			<div className='relative flex-1'>
				<img
					src={
						hoveredProject !== null
							? projects[hoveredProject].img
							: projects[0].img
					}
					className={classes}
					alt='project image'
				/>
			</div>
			<div className='flex-1'>
				<h2 className='text-6xl font-extrabold'>Projects</h2>
				<ul className='divide-y-2 divide-light-100'>
					{projects.map(
						(project: { title: string; img: string }, index) => (
							<ProjectCard
								key={index}
								{...project}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}
								onFocus={() => handleFocus(index)}
								onBlur={handleBlur}
							/>
						),
					)}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
