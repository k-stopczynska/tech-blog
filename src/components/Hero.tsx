import React from 'react';
import Heading from './Heading';
import Categories from './Categories';
import Featured from '@/components/Featured';

const Hero = () => {
	return (
		<section className='w-full h-full flex flex-col'>
			<Heading />
			<section className="flex flex-col lg:flex-row items-center justify-between gap-6 my-10">
				<Featured />
				<Categories />
			</section>
		</section>
	);
};

export default Hero;
