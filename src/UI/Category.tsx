import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CategoryType } from '@/types';

const Category = ({ title, img }: CategoryType) => {
	return (
		<Link
			href={`/blog?category=${title}`}
			className='flex flex-col items-center gap-1 py-2 border-b hover:font-semibold transition duration-600'
		>
			<div className='semi-shadow bg-light-100 rounded '>
				<Image src={img} alt={title} width={32} height={32} />
			</div>
			<p className='flex text-[10px]'>{title}</p>
		</Link>
	);
};

export default Category;
