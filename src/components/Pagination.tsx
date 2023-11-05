'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../UI/Button';

const Pagination = ({ page, hasPrev, hasNext }: any) => {
	const router = useRouter();
	const handlePrev = () => {
		router.push(`?page=${page - 1}`);
	};

	const handleNext = () => {
		router.push(`?page=${page + 1}`);
	};

	return (
		<div className=' flex justify-around items-center my-10'>
			<Button
				url=''
				title='previous'
				variant='simpleButton'
				source=''
				onClick={handlePrev}
				type='button'
				disabled={!hasPrev}
			/>
			<Button
				url=''
				title='next'
				variant='simpleButton'
				source=''
				onClick={handleNext}
				type='button'
				disabled={!hasNext}
			/>
		</div>
	);
};

export default Pagination;
