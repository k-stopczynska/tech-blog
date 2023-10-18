'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Card from '@/UI/Card';

const cards1 = [
	{ title: 'Card 1' },
	{ title: 'Card 2' },
	{ title: 'Card 3' },
	{ title: 'Card 4' },
	{ title: 'Card 5' },
	{ title: 'Card 6' },
	{ title: 'Card 7' },
];

const CardList = () => {
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
		<section className='overflow-hidden py-5 border-y-2 border-secondary-200'>
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className='h-full w-[2300px] flex relative gap-[1rem] px-[2rem]'
				>
					{cards1.map((card) => (
						<Card {...card} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CardList;
