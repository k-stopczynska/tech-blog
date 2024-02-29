import React, { Suspense } from 'react';
import Image from 'next/image';
import Author from '@/UI/Author';
import Content from '@/UI/Content';
import Comments from '@/components/Comments';
import Loader from '@/components/Loader';
import { PostType } from '@/types';

const getPost = async (slug: string): Promise<PostType> => {
	const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
		cache: 'no-store',
	});
	if (!response.ok) {
		throw new Error('fetching this post failed, try again');
	}
	return response.json();
};

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
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
		<Suspense fallback={<Loader />}>
			<article className='gradient mt-10 w-full p-4 md:p-10 flex flex-col justify-center gap-12 '>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					<div className='flex flex-col flex-1 justify-between'>
						<h1 className='text-3xl md:text-4xl font-bold pb-12'>
							{title}
						</h1>
						<Author
							author={user.name}
							timestamp={createdAt.toLocaleString().split('T')[0]}
							image={categoryImages[categorySlug]}
						/>
					</div>
					<div className='flex-1 flex flex-col items-center justify-between gap-4 md:items-end lg:gap-0'>
						<div className='overflow:hidden max-h-[400px] relative mt-10 md:mt-0'>
							<Image src={img} alt='' height={400} width={300} />
						</div>
					</div>
				</div>
				<Content desc={desc} variant='post' />
				<Comments postSlug={slug} />
			</article>
		</Suspense>
	);
}
