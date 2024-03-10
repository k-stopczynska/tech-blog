import React, { useState } from 'react';
import Link from 'next/link';
import ProjectElem from '@/UI/ProjectElem';
import ProjectCard from '@/UI/ProjectCard';
import { projects } from '@/utils/utils';

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
					(
						project: {
							title: string;
							img: string;
							content: string;
							stack: string[];
							links: any;
						},
						index,
					) => (
						<ProjectCard
							{...project}
							index={index}
							hoveredProject={hoveredProject}
						/>
					),
				)}
			</div>
			<div className='flex-1'>
				<h2 className='text-6xl font-extrabold'>Projects</h2>
				<ul className='divide-y divide-light-100'>
					{projects.map(
						(project: { title: string; img: string }, index) => (
							<ProjectElem
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
