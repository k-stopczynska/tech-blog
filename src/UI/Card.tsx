import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardType } from '@/types';

const Card = ({ title, desc, img, createdAt, categorySlug, slug, key }: CardType) => {
	return (
		<Link href={`/posts/${slug}`} className='container' key={key}>
			<section className='card'>
				<div className='image'>
					<Image src={img} alt='' height={240} width={240} />
				</div>
				<h2 className='title uppercase text-xl font-bold tracking-widest mb-2'>
					{title}
				</h2>
				<div className='flex justify-between title text-secondary-100'>
					<p>
						{createdAt?.split('T')[0]}
					</p>
					<span>{categorySlug}</span>
				</div>

				<div className='content'>
					<p>{desc.substring(0, 120)}...</p>
				</div>
			</section>
		</Link>
	);
};

export default Card;
