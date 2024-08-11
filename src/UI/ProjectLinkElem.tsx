import React from 'react';
import Link from 'next/link';
import { ProjectLink } from '@/types';

const ProjectLinkElem = ({ link }: { link: ProjectLink }) => {
	return (
		<Link
			href={link.url}
			target='_blank'
			className='shadow text-center rounded py-2 px-4'
		>
			{link.label}
		</Link>
	);
};

export default ProjectLinkElem;
