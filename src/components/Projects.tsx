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
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setHoveredProject(index);
	};

	const handleFocus = (index: number) => {
		setHoveredProject(index);
	};

	return (
		<div className='flex items-center justify-between gap-8 min-w-[800px] min-h-[600px]'>
			<div className='relative flex-1 min-w-[350px]'>
				{projects.map(
					(project: { title: string; img: string }, index) => (
						<img
							key={index}
							src={project.img}
							className={`absolute top-[50%] translate-y-[-50%] ${
								index === hoveredProject
									? 'img-fade-in'
									: 'img-fade-out'
							}`}
							style={{
								opacity: index === hoveredProject ? 1 : 0,
							}}
							alt={`project image ${index}`}
						/>
					),
				)}
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
								
								onFocus={() => handleFocus(index)}
							
							/>
						),
					)}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
