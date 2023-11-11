import React from 'react';
import CardList from '@/components/CardList';
import { SearchParamsType } from '@/types';

export default function BlogPage({ searchParams }: { searchParams: SearchParamsType }) {
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
