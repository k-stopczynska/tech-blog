import React, { useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import ProjectList from '@/UI/ProjectList';
import ProjectCard from '@/UI/ProjectCard';
import { Project } from '@/types';
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
		return (
			<>
				<h2 className='text-6xl font-extrabold mt-12 mb-6'>Projects</h2>
				<ul>
					{projects.map((project: Project, index, hoveredProject) => (
						<ProjectCard
							{...project}
							key={index}
							hoveredProject={hoveredProject}
						/>
					))}
				</ul>
				;
			</>
		);
	}
};

export default Projects;
