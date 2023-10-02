import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Category = ({ title, img, href }: { title: string; img: string, href:string }) => {
	return (
        <Link href={href} className='flex items-center gap-2 py-2 border-b hover:text-secondary-100 focus:text-secondary-100 hover:font-semibold transition duration-600'>
			<div className='bg-light-100 rounded hover:bg-secondary-100 focus:bg-secondary-100 transition duration-600'>
				<Image src={img} alt='software' width={32} height={32} />
			</div>
			<p className='hidden lg:flex'>{title}</p>
		</Link>
	);
};

export default Category;
