import React from 'react';

const Card = ({ title }: { title: string }) => {
	return (
			<section className='card h-[300px] w-[300px] flex justify-center items-center rounded hover:scale-105 transition duration-[.6s] cursor-pointer'>
				<h2>{title}</h2>
			</section>
	);
};

export default Card;
