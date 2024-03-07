import React from 'react';
import Image from 'next/image';

const CVComponent = () => {
	return (
		<>
			<div className='relative'>
				<Image
					src='/klaudia_stopczynska.jpg'
					width={600}
					height={900}
					alt='author cv'
				/>
			</div>
			<a
				href='/klaudia_stopczynska.pdf'
				target='_blank'
				rel='noopener noreferrer'
				download
				className='shadow text-center rounded py-3 px-6 mt-4'
			>
				Download
			</a>
		</>
	);
};

export default CVComponent;
