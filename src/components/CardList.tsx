'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Card from '@/UI/Card';
import Pagination from '@/components/Pagination';

const getPosts = async (page: any, category: any) => {
	const response = await fetch(
		`https://localhost:3000/api/posts?page=${page}&cat=${category || ''}`,
	);
	if (!response.ok) {
		throw new Error('Loading posts failed...');
	}
	return response.json();
};

const CardList = async ({ page, category }: any) => {
	const POSTS_PER_PAGE = 6;
	const { posts, count } = await getPosts(page, category);
	const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
	const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

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
				translateX: '-1500px',
				ease: 'none',
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: '-180 top',
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
		<section className='overflow-hidden py-10 border-y-2 border-secondary-200'>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Posts</h3>
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className='h-full w-[2300px] flex relative gap-[1rem] px-[2rem]'
				>
					{posts?.map((card: any) => (
						<Card {...card} key={card._id} />
					))}
				</div>
			</div>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</section>
	);
};

export default CardList;
