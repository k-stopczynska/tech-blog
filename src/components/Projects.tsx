import React, { useState } from 'react';
import Link from 'next/link';
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
								className={`absolute bottom-0 rounded ${
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
								className={`absolute top-0 w-full min-h-[250px] mt-6 rounded border border-light-100 p-4 flex flex-col justify-between gap-4 ${
									index === hoveredProject
										? 'img-fade-in'
										: 'img-fade-out'
								}`}
								style={{
									opacity: index === hoveredProject ? 1 : 0,
								}}
							>
								<h3 className='text-2xl font-bold tracking-widest'>
									{project.title}
								</h3>
								<p>{project.content}</p>
								<div className='flex flex-wrap items-center gap-2'>
									{project.stack.map((stack) => (
										<div className='py-1 px-2 text-sm bg-[#2B3E52] rounded '>
											{stack}
										</div>
									))}
								</div>
								<div className='flex justify-between items-center '>
									{Object.entries(project.links).map(
										(link: any) => (
											<Link
                                                href={link[1]}
                                                target="_blank"
												className='shadow text-center rounded py-2 px-4'
											>
												{link[0]}
											</Link>
										),
									)}
								</div>
							</div>
						</div>
					),
				)}
			</div>
			<div className='flex-1'>
				<h2 className='text-6xl font-extrabold'>Projects</h2>
				<ul className='divide-y divide-light-100'>
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
