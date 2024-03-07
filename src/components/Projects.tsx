import React, { useState } from 'react';
import ProjectCard from '@/UI/ProjectCard';

const projects = [
	{ title: 'codegroove', img: '/city.jpg' },
	{ title: 'code quest', img: '/coder.jpg' },
	{ title: 'invoices', img: '/hard.jpg' },
	{ title: 'recruitment bot', img: '/place.png' },
	{ title: 'roulette', img: '/games.jpg' },
	{ title: 'vetcenter', img: '/door.jpg' },
];

const Projects = () => {

    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

      const handleMouseEnter = (index: number) => {
			setHoveredProject(index);
		};

		const handleMouseLeave = () => {
			setHoveredProject(null);
		};

		const handleFocus = (index: number) => {
			setHoveredProject(index);
		};

		const handleBlur = () => {
			setHoveredProject(null);
		};
	return (
		<div className='flex items-center justify-between gap-8 max-w-[800px] min-h-[600px]'>
			<div className='relative flex-1 '>
				<img
					src={hoveredProject !== null ? projects[hoveredProject].img : '/imaginary_room2.jpg'}
					className='object-fill'
					alt='project image'
				/>
			</div>
			<div className='flex-1'>
				<h2>Projects</h2>
				<ul className='divide-y-2 divide-light-100 space-y-6'>
					{projects.map((project: { title: string; img: string }, index) => (
                        <ProjectCard
                            key={ index}
							{...project}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
