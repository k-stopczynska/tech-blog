import React from 'react';

interface ProjectCard {
	title: string;
	onMouseEnter: (event: any) => void;
	onMouseLeave: (event: any) => void;
	onFocus: (event: any) => void;
	onBlur: (event: any) => void;
}

const ProjectCard = ({
	title,
	onMouseEnter,
	onMouseLeave,
	onFocus,
	onBlur,
}: ProjectCard) => {
	return (
		<li
			className='flex justify-between items-center py-6 text-lg cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onFocus={onFocus}
			onBlur={onBlur}
		>
			<span>{title}</span>
			<span>{title}</span>
		</li>
	);
};

export default ProjectCard;
