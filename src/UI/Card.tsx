import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, img, createdAt, categorySlug, slug, key }: any) => {
	return (
		<Link href={`/posts/${slug}`} className='container' key={key}>
			<section className='card'>
				<div className='image'>
					<Image src={img} alt='' fill />
				</div>
				<h2 className='title'>{title}</h2>

				<div className='content'>
					<p>
						Lorem ipsum is a placeholder text commonly used to
						demonstrate the visual form of a document .
					</p>
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
