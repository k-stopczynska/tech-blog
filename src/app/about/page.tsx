import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<>
			<p className='mt-[3rem] mb-[-4rem]'>
				Welcome to My Room. Bright Spots Hold Secrets: Can You Find
				Them?
			</p>
			<div className='relative object-cover w-full top-[8rem] left-[50%] translate-x-[-50%] md:top-24'>
				<img src='/room.jpeg' alt='pixel art room image' />
				<div className='absolute w-full h-full xl:w-[96.5%] top-0 left-0'>
					<div className='relative w-[20%] h-[15%] top-[23%] left-[13.5%] cursor-pointer shadow-custom transition-all hover:shadow-hover focus:shadow-hover '>
						<Link href={`?modal=true&variant=memo`}>
							<button className='absolute top-0 bottom-0 left-0 right-0 text-center opacity-0 transition-opacity hover:opacity-100'>
								personal memo
							</button>
						</Link>
					</div>
					<div className='relative w-[21%] h-[28%] top-[27%] left-[13%] rounded-[3.5rem] cursor-pointer transition-all shadow-custom hover:shadow-hover focus:shadow-hover'>
						<Link
							href={`?modal=true&variant=projects`}
							className='absolute top-0 bottom-0 left-0 right-0 p-6 text-center  opacity-0 transition-opacity hover:opacity-100'
						>
							projects
						</Link>
					</div>
					{/* <div className='relative w-[23%] h-[7%] top-[9%] left-[57%] cursor-pointer transition-all shadow-custom hover:shadow-hover focus:shadow-hover'>
						<Link href={`?modal=true&variant=tech`}>
							<button className='absolute top-0 bottom-0 left-0 right-0 text-center opacity-0 transition-opacity hover:opacity-100'>
								see tech-stack
							</button>
						</Link>
					</div>
					<div className='relative w-[3.2%] h-[12%] top-[-13.5%] left-[51.5%] cursor-pointer transition-all shadow-custom hover:shadow-hover focus:shadow-hover'>
						<Link href={`?modal=true&variant=personal`}>
							<button className='absolute top-0 bottom-0 left-0 right-0 text-center opacity-0 transition-opacity hover:opacity-100'>
								see personal memo
							</button>
						</Link>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default AboutPage;
