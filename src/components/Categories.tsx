import React from 'react';
import Image from 'next/image';
import Category from '@/UI/Category';

// const getCategories = async () => {
// 	const response = await fetch(
// 		'http://localhost:3000/api/categories',
// 	);
// 	if (!response.ok) {
// 		throw new Error('Loading categories failed...');
// 	}
// 	console.log(response.json())
// 	return response.json();
// };

const Categories = async() => {
	// const categories = await getCategories();
	// console.log(categories)
	return (
		<aside className='flex w-full justify-between lg:w-fit lg:flex-col h-full lg:px-4 py-2 border rounded'>
			{/* {categories?.map((category: any) => (
				<Category {...category} key={category.title} />
			))} */}
		</aside>
	);
};

export default Categories;
