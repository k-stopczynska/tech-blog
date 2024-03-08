import React from 'react';

interface ProjectCard {
	title: string;
	onMouseEnter: (event: any) => void;
	onFocus: (event: any) => void;
}

const ProjectCard = ({ title, onMouseEnter, onFocus }: ProjectCard) => {
	return (
		<li
			className=' py-6 text-xl cursor-pointer hover:font-bold focus:font-bold transition'
			onMouseEnter={onMouseEnter}
			onFocus={onFocus}
		>
			<span className='before:absolute before:w-[30px] before:h-[30px] before:bg-red-900'></span>
			<div className='flex justify-between'>
				<span>{title}</span>
				<span>{title}</span>
			</div>
		</li>
	);
};

export default ProjectCard;
