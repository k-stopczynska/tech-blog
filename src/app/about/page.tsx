import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainScene from '@/components/MainScene';

const AboutPage = () => {
	return (
		// <div className= 'w-full h-[800px] border-none'>
		// 	<MainScene/>
		// </div>
		<div className='min-h-[600px] w-full relative object-cover'>
			<Image
				src='/door.jpg'
				alt='not-found page'
				className='absolute top-[8rem] md:top-24 left-0 hue-rotate-75'
				height={600}
				width={1200}
			/>
			<div className='absolute top-6 left-0 flex flex-col items-center justify-center w-full h-20 gap-4 md:flex-row md:top-2'>
				<h1>Page under construction</h1>
				<Link href='/' className='shadow text-center rounded py-3 px-6'>
					go back...
				</Link>
			</div>
		</div>
	);
};

export default AboutPage;
