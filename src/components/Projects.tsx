import React, { useState } from 'react';
import ProjectList from '@/UI/ProjectList';
import ProjectCard from '@/UI/ProjectCard';
import { projects } from '@/utils/utils';
import { Project } from '@/types';

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
						project: Project,
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
				<ProjectList
					handleMouseEnter={handleMouseEnter}
					handleFocus={handleFocus}
				/>
			</div>
		</div>
	);
};

export default Projects;
