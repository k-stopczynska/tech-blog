import React, { useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import ProjectList from '@/UI/ProjectList';
import ProjectCard from '@/UI/ProjectCard';
import { Project, ProjectLink } from '@/types';
import StackElem from '@/UI/StackElem';
import ProjectLinkElem from '@/UI/ProjectLinkElem';
import { projects } from '@/utils/utils';

const Projects = () => {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	const { height, width } = useWindowDimensions();

	const handleMouseEnter = (index: number) => {
		setHoveredProject(index);
	};

	const handleFocus = (index: number) => {
		setHoveredProject(index);
	};
	if (width && width >= 1200) {
		return (
			<div className='flex  items-center justify-between gap-8 min-w-[800px] min-h-[600px]'>
				<div className='relative flex-1 '>
					{projects.map((project: Project, index) => (
						<ProjectCard
							{...project}
							key={index}
							index={index}
							hoveredProject={hoveredProject}
						/>
					))}
				</div>
				<div className='flex-1'>
					<ProjectList
						handleMouseEnter={handleMouseEnter}
						handleFocus={handleFocus}
					/>
				</div>
			</div>
		);
	}

	if (width && width < 1200) {
		return projects.map((project: Project) => (
			<div className='flex flex-col pb-12'>
				<img
					src={project.img}
					className='rounded'
					alt={`${project.title} image`}
				/>
				<div className='w-full min-h-[250px] mt-6 rounded border border-light-100 p-4 flex flex-col justify-between gap-4'>
					<h3 className='text-2xl font-bold tracking-widest'>
						{project.title}
					</h3>
					<p>{project.content}</p>
					<ul className='flex flex-wrap items-center gap-2'>
						{project.stack.map(
							(stack: string, stackIndex: number) => (
								<StackElem stack={stack} key={stackIndex} />
							),
						)}
					</ul>
					<div className='flex justify-between items-center '>
						{project.links.map(
							(link: ProjectLink, linkIndex: number) => (
								<ProjectLinkElem link={link} key={linkIndex} />
							),
						)}
					</div>
				</div>
			</div>
		));
	}
};

export default Projects;
