import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { CategoryType } from '@/types';

const getPosts = async (page: number, category: any) => {
	const response = await fetch(
		`http://localhost:3000/api/posts?page=${page}&cat=${category || ''}`,
	);
	if (!response.ok) {
		throw new Error('Loading posts failed...');
	}
	return response.json();
};

const Featured = async () => {
	const { posts } = await getPosts(1, '');
	const { title, desc, img, createdAt, categorySlug, slug } = posts[0];

	return (
		<article className='gradient px-6 py-10 h-full rounded flex flex-col-reverse lg:flex-row flex-1 gap-6'>
			<div className='flex flex-col leading-7 flex-1 text-justify'>
				<p>{desc.substring(0, 600)}...</p>
				<Link
					href={`/posts/${slug}`}
					className='shadow max-w-[35%] rounded py-3 px-6 mt-4'
				>
					Read more
				</Link>
			</div>
			<div className='flex-1 flex flex-col justify-between gap-4 items-start lg:gap-0'>
				<h2 className='text-4xl font-semibold'>{title}</h2>
				<div className='relative rounded overflow-hidden h-[300px] w-[400px]'>
					<Image
						src={img}
						alt='coder ghost'
						className='invert rounded'
						height={400}
						width={300}
						layout='fixed'
					/>
				</div>
			</div>
		</article>
	);
};

export default Featured;
