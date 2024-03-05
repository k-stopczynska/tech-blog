import React from 'react';
import CardGrid from '@/components/CardGrid';
import { SearchParamsType } from '@/types';

export default function BlogPage({
	searchParams,
}: {
	searchParams: SearchParamsType;
}) {
	const page = parseInt(searchParams.page) || 1;
	const { category } = searchParams;

	return (
		<div>
			<h1 className='text-4xl font-bold text-center mt-20 mb-10 capitalize'>
				{category ? category.title : 'Blog'}
			</h1>
			<CardGrid page={page} category={category} />
		</div>
	);
}
