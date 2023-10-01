import React from 'react';
import Featured from './Featured';
import Categories from './Categories';

const Hero = () => {
	return (
		<section className='w-full h-full flex'>
			<Featured />
			<Categories />
		</section>
	);
};

export default Hero;
