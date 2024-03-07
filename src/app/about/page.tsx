import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainScene from '@/components/MainScene';

const AboutPage = () => {
	return (
		<>
			<div className='relative object-cover w-full top-[8rem] left-[50%] translate-x-[-50%] md:top-24'>
				<img src='/imaginary_room2.jpg' alt='pixel art room image' />
				<div className='absolute w-full h-full xl:w-[96.5%] top-0 left-0'>
					<div
						role='anchor'
						className='relative w-[20%] h-[15%] top-[23%] left-[13.5%] cursor-pointer shadow-custom transition-all hover:shadow-hover focus:shadow-hover '
					>
						<a
							href='/klaudia_stopczynska.pdf'
							target='_blank'
							rel='noopener noreferrer'
							download
							className='absolute top-0 bottom-0 left-0 right-0 p-2 text-center  opacity-0 transition-opacity hover:opacity-100'
						>
							click to download CV
						</a>
					</div>
					<div className='relative w-[21%] h-[28%] top-[27%] left-[13%] rounded-[3.5rem] cursor-pointer transition-all shadow-custom hover:shadow-hover focus:shadow-hover'>
						<a
							href='/projects'
							target='_blank'
							className='absolute top-0 bottom-0 left-0 right-0 p-6 text-center  opacity-0 transition-opacity hover:opacity-100'
						>
							click to see projects page
						</a>
					</div>
					<div className='relative w-[23%] h-[7%] top-[9%] left-[57%] cursor-pointer transition-all shadow-custom hover:shadow-hover focus:shadow-hover'>
						<Link href='?modal=true'>
							<button className='absolute top-0 bottom-0 left-0 right-0 text-center opacity-0 transition-opacity hover:opacity-100'>
								click to see tech-stack
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
