import React from 'react';

interface ProjectElem {
	title: string;
	onMouseEnter: (event: any) => void;
	onFocus: (event: any) => void;
}

const ProjectElem = ({ title, onMouseEnter, onFocus }: ProjectElem) => {
	return (
		<li
			className='relative py-6 text-xl cursor-pointer transition group'
			onMouseEnter={onMouseEnter}
			onFocus={onFocus}
		>
			<span className='before:w-[30px] before:h-[30px] before:bg-light-100 before:rounded-full before:absolute before:left-0 before:opacity-0 before:group-hover:opacity-100 transition'></span>
			<p className='group-hover:font-bold group-focus:font-bold group-hover:translate-x-10 group-focus:translate-x-10 transition'>
				{title}
			</p>
		</li>
	);
};

export default ProjectElem;
