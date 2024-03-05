import React, { Suspense } from 'react';
import Loader from './Loader';
import Card from '../UI/Card';
import Pagination from '@/components/Pagination';
import { UpdatedSearchParamsType, CardType, CategoryType } from '@/types';

const getPosts = async (page: number, category: CategoryType) => {
	const response = await fetch(
		`https://ainspiring.netlify.app/api/posts?page=${page}&cat=${
			category || ''
		}`,
	);
	if (!response.ok) {
		throw new Error('Loading posts failed...');
	}
	return response.json();
};

const CardGrid = async ({ page, category }: UpdatedSearchParamsType) => {
	const POSTS_PER_PAGE = 6;
	const { posts, count } = await getPosts(page, category);
	const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
	const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

	return (
		<>
			<Suspense fallback={<Loader />}>
				<div className='flex flex-wrap justify-center w-full md:justify-between gap-10 mt-20'>
					{posts?.map((card: CardType) => (
						<Card {...card} key={card._id} />
					))}
				</div>
			</Suspense>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</>
	);
};

export default CardGrid;
