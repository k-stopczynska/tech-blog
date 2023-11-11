'use client'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import CardListSwiper from './CardListSwiper'
import CardListScroller from './CardListScroller'


const CardList = () => {
    const { height, width } = useWindowDimensions()
    return (
		<>
			{width < 1200 && <CardListSwiper />}
			{width >= 1200 && <CardListScroller />}
		</>
	);
}

export default CardList