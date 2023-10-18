import React from 'react';
import Image from 'next/image';
import Category from '@/UI/Category';

const categories = [
	{ title: 'soft', img: '/soft.png', href: '/' },
	{ title: 'hard', img: '/hard.png', href: '/' },
	{ title: 'places', img: '/place.png', href: '/' },
	{ title: 'materials', img: '/materials.png', href: '/' },
	{ title: 'lifestyle', img: '/lifestyle.png', href: '/' },
	{ title: 'games', img: '/console.png', href: '/' },
	{ title: 'hobbies', img: '/hobbies.png', href: '/' },
];

const Categories = () => {
	return (
		<aside className='flex w-full justify-between lg:w-fit lg:flex-col h-full lg:px-4 py-2 border rounded'>
			{categories.map((category) => (
				<Category {...category} key={category.title} />
			))}
		</aside>
	);
};

export default Categories;
