import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title }: { title: string }) => {
	return (
		<Link href='/' className='container'>
			<section className='card'>
				<div className='image'>
					<Image src='/lifestyle.png' alt='' fill />
				</div>
				<h2 className='title'>{title}</h2>

				<div className='content'>
					<p>
						Lorem ipsum is a placeholder text commonly used to
						demonstrate the visual form of a document .
					</p>
				</div>
			</section>
		</Link>
	);
};

export default Card;
