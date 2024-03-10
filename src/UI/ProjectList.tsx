import React from 'react';
import ProjectElem from '@/UI/ProjectElem';
import { projects } from '@/utils/utils';
import { Project } from '@/types';

const ProjectList = ({
	handleMouseEnter,
	handleFocus,
}: {
	handleMouseEnter: (index: number) => void;
	handleFocus: (index: number) => void;
}) => {
	return (
		<>
			<h2 className='text-6xl font-extrabold'>Projects</h2>
			<ul className='divide-y divide-light-100'>
				{projects.map((project: Project, index) => (
					<ProjectElem
						key={index}
						{...project}
						onMouseEnter={() => handleMouseEnter(index)}
						onFocus={() => handleFocus(index)}
					/>
				))}
			</ul>
		</>
	);
};

export default ProjectList;
