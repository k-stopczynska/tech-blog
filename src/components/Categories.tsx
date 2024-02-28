import React from 'react';
import Category from '@/UI/Category';
import { CategoryType } from '@/types';

const getCategories = async () => {
	const response = await fetch('http://localhost:3000/api/categories');
	if (!response.ok) {
		throw new Error('Loading categories failed...');
	}
	return response.json();
};

const Categories = async () => {
	const categories = await getCategories();
	return (
		<aside className='flex w-full justify-between lg:w-fit lg:flex-col h-full lg:px-4 py-2 border rounded'>
			{categories?.map((category: CategoryType) => (
				<Category {...category} key={category.title} />
			))}
		</aside>
	);
};

export default Categories;
