'use client';

import React, { useRef, useEffect } from 'react';
import useSWR from 'swr';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Card from '@/UI/Card';
import Loader from './Loader';
import { UpdatedSearchParamsType, CardType } from '@/types';
import { fetcher } from '@/utils/fetcher';

const CardListScroller = ({ page, category }: UpdatedSearchParamsType) => {
	const { data, mutate, isLoading } = useSWR(
		`https://ainspiring.netlify.app/api/posts?page=1&cat=${
			category || ''
		}`,
		fetcher,
	);

	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: '-2000px',
				ease: 'none',
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: '-280 top',
					end: '1500 top',
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			<section className='overflow-hidden py-10 border-y-2 border-secondary-200'>
				<h3 className='text-lg md:text-2xl font-bold mb-20'>Latests Posts</h3>
				<div ref={triggerRef}>
					<div
						ref={sectionRef}
						className='w-[2300px] flex relative gap-[1rem] px-[2rem]'
					>
						{data?.posts?.map((card: CardType, index: number) => (
							<Card {...card} key={index} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CardListScroller;
