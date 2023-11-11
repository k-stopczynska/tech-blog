import React from 'react';
import CardList from '@/components/CardList';
import { CategoryType } from '@/types';

export default function BlogPage({ searchParams }: { searchParams: {page: string, category: CategoryType} }) {
	const page = parseInt(searchParams.page) || 1;
	const { category } = searchParams;

	return (
		<div>
			<h1 className='text-4xl font-bold text-center mt-20 mb-10 capitalize'>
				{category.title}
			</h1>
			<CardList page={page} category={category} />
		</div>
	);
};
