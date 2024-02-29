'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../UI/Button';

const Pagination = ({
	page,
	hasPrev,
	hasNext,
}: {
	page: number;
	hasPrev: boolean;
	hasNext: boolean;
}) => {
	const router = useRouter();
	const handlePrev = () => {
		router.push(`?page=${page - 1}`);
	};

	const handleNext = () => {
		router.push(`?page=${page + 1}`);
	};

	return (
		<div className=' flex justify-around items-center'>
			<Button
				title='previous'
				variant='simpleButton'
				onClick={handlePrev}
				type='button'
				disabled={!hasPrev}
			/>
			<Button
				title='next'
				variant='simpleButton'
				onClick={handleNext}
				type='button'
				disabled={!hasNext}
			/>
		</div>
	);
};

export default Pagination;
