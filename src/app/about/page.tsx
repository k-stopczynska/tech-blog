import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainScene from '@/components/MainScene';

const AboutPage = () => {
	return (
		<>
			<div className='relative object-cover w-full top-[8rem] left-[50%] translate-x-[-50%] md:top-24'>
				<img src='/imaginary_room2.jpg' alt='pixel art room image' />
				<div className='absolute w-full h-full border-4 border-red-900 top-0 left-0'>
					<div className='relative w-[21%] h-[15%] top-[23%] left-[13%] border-4 border-secondary-100'></div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
