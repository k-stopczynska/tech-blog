'use client';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import ContactLink from '@/UI/ContactLink';

const ContactPage = () => {
	const emailRef = useRef(null);
	const facebookRef = useRef(null);
	const githubRef = useRef(null);
	const instagramRef = useRef(null);
	const linkedinRef = useRef(null);

	useLayoutEffect(() => {
		const email = gsap.to(emailRef.current, {
			rotation: 360,
			duration: 2.5,
			delay: 1.5,
			ease: 'bounce.out',
			x: 0,
			y: 350,
		});
		const instagram = gsap.to(instagramRef.current, {
			rotation: 360,
			duration: 3,
			delay: 2,
			ease: 'steps(12)',
			x: -150,
			y: 700,
		});
		const linkedin = gsap.to(linkedinRef.current, {
			rotation: 360,
			duration: 1.5,
			delay: 2,
			ease: 'bounce.out',
			x: -225,
			y: 450,
		});
		const facebook = gsap.to(facebookRef.current, {
			rotation: 360,
			duration: 1.5,
			delay: 2.5,
			ease: 'bounce.out',
			x: 100,
			y: 700,
		});
		const github = gsap.to(githubRef.current, {
			rotation: 360,
			duration: 2.5,
			delay: 1,
			ease: 'steps(12)',
			x: 200,
			y: 500,
		});
		return () => {
			email.kill();
			facebook.kill();
			github.kill();
			instagram.kill();
			linkedin.kill();
		};
	}, []);
	return (
		<section className='relative w-full h-[80vh]'>
			<ContactLink
				href='#'
				ref={emailRef}
				src='./icons8-email.svg'
				alt='email'
				size={100}
				color='secondary-100'
			/>
			<ContactLink
				href='#'
				ref={facebookRef}
				src='./icons8-facebook.svg'
				alt='facebook'
				size={120}
				color='light-100'
			/>
			<ContactLink
				href='#'
				ref={linkedinRef}
				src='./icons8-linkedin.svg'
				alt='linkedin'
				size={160}
				color='blue-300'
			/>
			<ContactLink
				href='#'
				ref={instagramRef}
				src='./icons8-instagram.svg'
				alt='instagram'
				size={140}
				color='yellow-300'
			/>
			<ContactLink
				href='#'
				ref={githubRef}
				src='./icons8-github.svg'
				alt='github'
				size={80}
				color='secondary-200'
			/>
		</section>
	);
};

export default ContactPage;
