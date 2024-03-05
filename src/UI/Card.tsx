import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Content from '@/UI/Content';
import { CardType } from '@/types';

const Card = ({
	title,
	desc,
	img,
	createdAt,
	categorySlug,
	slug,
}: CardType) => {
	return (
		<Link href={`/posts/${slug}`} className='container'>
			<section className='card'>
				<div className='image'>
					<Image src={img} alt='' width={240} height={180} />
				</div>
				<h2 className='title uppercase text-xl font-bold tracking-widest mb-2'>
					{title}
				</h2>
				<div className='flex justify-between title text-secondary-100 bottom-1 relative'>
					<p>{createdAt.toLocaleString()?.split('T')[0]}</p>
					<span>{categorySlug}</span>
				</div>
				<div className='content'>
					<Content desc={desc} variant='card' />
				</div>
			</section>
		</Link>
	);
};

export default Card;
