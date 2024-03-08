import React, { useState } from 'react';
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
						<div key={index} className='relative'>
							<img
								src={project.img}
								className={`absolute bottom-0 ${
									index === hoveredProject
										? 'img-fade-in'
										: 'img-fade-out'
								}`}
								style={{
									opacity: index === hoveredProject ? 1 : 0,
								}}
								alt={`project image ${index}`}
							/>
							<div
								className={`absolute top-0 w-full h-[200px] mt-6 bg-black ${
									index === hoveredProject
										? 'img-fade-in'
										: 'img-fade-out'
								}`}
								style={{
									opacity: index === hoveredProject ? 1 : 0,
								}}
							>
								<h3>{project.title}</h3>
								<p>{project.content}</p>
								{project.stack.map((stack) => (
									<div>{stack}</div>
								))}
								{Object.values(project.links).map(
									(link: any) => (
										<div>{link}</div>
									),
								)}
							</div>
						</div>
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
