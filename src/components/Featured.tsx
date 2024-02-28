import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Content from '@/UI/Content';

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
	const { posts } = await getPosts(1, 'places');
	const { title, desc, img, slug } = posts[0];

	return (
		<article className='gradient px-6 py-10 h-full w-full rounded flex flex-col-reverse md:flex-row flex-1 gap-6'>
			<div className='flex flex-col leading-7 flex-1 text-justify'>
				<Content desc={desc} variant='featured' />
				<Link
					href={`/posts/${slug}`}
					className='shadow text-center rounded py-3 px-6 mt-4'
				>
					Read more
				</Link>
			</div>
			<div className='flex-1 flex flex-col items-center justify-between gap-4 md:items-end lg:gap-0'>
				<h2 className='text-4xl text-center md:text-right font-semibold'>
					{title}
				</h2>
				<div className='relative rounded overflow-hidden max-h-[400px] w-[300px]'>
					<Image
						src={img}
						alt='coder ghost'
						className='invert rounded'
						height={400}
						width={300}
					/>
				</div>
			</div>
		</article>
	);
};

export default Featured;
