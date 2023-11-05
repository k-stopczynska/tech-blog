import React from 'react';
import Image from 'next/image';
import Author from '@/UI/Author';
import Comments from '@/components/Comments';

const getPost = async (slug: string) => {
	const response = await fetch(`https://localhost:3000/api/posts/${slug}`);
	if (!response.ok) {
		throw new Error('fetching this post failed, try again');
	}
	return response.json();
};

export default async function PostPage({ params }: any) {
	const { slug } = params;
	const post = await getPost(slug);

	const { title, desc, createdAt, user, img, categorySlug } = post;
	const categoryImages = {
		soft: '/soft.png',
		hard: '/hard.png',
		places: '/place.png',
		materials: '/materials.png',
		lifestyle: '/lifestyle.png',
		games: '/console.png',
		hobbies: '/hobbies.png',
	};

	return (
		<article className='gradient mt-10 w-full p-8 md:p-20 flex flex-col justify-center gap-12 '>
			<div className='flex flex-col items-center justify-between lg:flex-row'>
				<div className='flex flex-col justify-between h-[300px] flex-1'>
					<h1 className='text-xl md:text-4xl font-bold pb-6'>
						{title}
					</h1>
					<Author
						author={user.name}
						timestamp={createdAt.split('T')[0]}
						image={categoryImages['soft']}
					/>
				</div>
				<div className='lg:flex-1 aspect-auto w-full min-h-[300px] relative mt-10 lg:mt-0'>
					<Image src={img} alt='' fill />
				</div>
			</div>
			<p className='text-base md:text-lg text-justify '>{desc}</p>
			<Comments postSlug={slug} />
		</article>
	);
}
