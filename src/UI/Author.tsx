import React from 'react';
import Image from 'next/image';

const Author = ({ author, timestamp, image }: any) => {
	const [name, surname] = author?.split(' ');

	return (
		<div className='flex items-center gap-2 lg:mb-0'>
			<Image
				src={image}
				alt='author image'
				width={64}
				height={64}
				className='rounded-[50%] bg-light-100 p-2'
			/>
			<div>
				<p>{timestamp}</p>
				<p className='uppercase text-secondary-100'>
					{name}
					<span className='text-light-100 pl-1'>{surname}</span>
				</p>
			</div>
		</div>
	);
};

export default Author;
