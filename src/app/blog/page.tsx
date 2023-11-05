import React from 'react';
import CardList from '@/components/CardList';

export default function BlogPage({ searchParams }: any) {
	const page = parseInt(searchParams.page) || 1;
	const { category } = searchParams;

	return (
		<div>
			<h1 className='text-4xl font-bold text-center mt-20 mb-10 capitalize'>
				{category}
			</h1>
			<CardList page={page} category={category} />
		</div>
	);
};
