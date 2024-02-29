'use client';
import { Suspense } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import CardListSwiper from './CardListSwiper';
import CardListScroller from './CardListScroller';
import Loader from './Loader';
import { UpdatedSearchParamsType } from '@/types';

const CardList = ({ page, category }: UpdatedSearchParamsType) => {
	const { height, width } = useWindowDimensions();
	return (
		<Suspense fallback={<Loader />}>
			<div className='wrap'>
				{width! < 1200 && (
					<CardListSwiper page={page} category={category} />
				)}
				{width! >= 1200 && (
					<CardListScroller page={page} category={category} />
				)}
			</div>
		</Suspense>
	);
};

export default CardList;
