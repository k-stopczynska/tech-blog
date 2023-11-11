import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardType } from '@/types';

const Card = ({ title, desc, img, createdAt, categorySlug, slug, key }: CardType) => {
	return (
		<Link href={`/posts/${slug}`} className='container' key={key}>
			<section className='card'>
				<div className='image'>
					<Image src={img} alt='' fill />
				</div>
				<h2 className='title'>{title}</h2>

				<div className='content'>
					<p>{desc.substring(0, 80)}...</p>
					<p>
						{createdAt?.split('T')[0]}
						<span>{categorySlug}</span>
					</p>
				</div>
			</section>
		</Link>
	);
};

export default Card;
