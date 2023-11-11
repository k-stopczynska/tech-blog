'use client'

import useWindowDimensions from '@/hooks/useWindowDimensions';
import CardListSwiper from './CardListSwiper';
import CardListScroller from './CardListScroller';
import { UpdatedSearchParamsType } from '@/types';


const CardList = ({ page, category }: UpdatedSearchParamsType) => {
	const { height, width } = useWindowDimensions();
	return (
		<>
			{width! < 1200 && <CardListSwiper page={page} category={category}/>}
			{width! >= 1200 && <CardListScroller page={page} category={category}/>}
		</>
	);
};

export default CardList