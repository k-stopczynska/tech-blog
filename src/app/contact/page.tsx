'use client';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
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
			delay: 0.5,
			ease: 'bounce.out',
			x: 0,
			y: 450,
		});
		const instagram = gsap.to(instagramRef.current, {
			rotation: 360,
			duration: 2.2,
			delay: 1,
			ease: 'steps(72)',
			x: -150,
			y: 800,
		});
		const linkedin = gsap.to(linkedinRef.current, {
			rotation: 360,
			duration: 1.5,
			delay: 1,
			ease: 'bounce.out',
			x: -225,
			y: 550,
		});
		const facebook = gsap.to(facebookRef.current, {
			rotation: 360,
			duration: 1.5,
			delay: 1.5,
			ease: 'bounce.out',
			x: 100,
			y: 800,
		});
		const github = gsap.to(githubRef.current, {
			rotation: 360,
			duration: 2.5,
			delay: 0,
			ease: 'steps(36)',
			x: 200,
			y: 600,
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
		<section className='relative w-full h-[80vh] link-container'>
			<ContactLink
				href='mailto: k.stopczynska@gmail.com'
				ref={emailRef}
				src='./icons8-email.svg'
				alt='email'
				size={100}
				color='secondary-100'
			/>
			<ContactLink
				href='https://www.facebook.com/klaudia.stopczynska/'
				ref={facebookRef}
				src='./icons8-facebook.svg'
				alt='facebook'
				size={120}
				color='light-100'
			/>
			<ContactLink
				href='https://www.linkedin.com/in/klaudia-stopczynska/'
				ref={linkedinRef}
				src='./icons8-linkedin.svg'
				alt='linkedin'
				size={160}
				color='light-100'
			/>
			<ContactLink
				href='https://www.instagram.com/a_in_spiring/'
				ref={instagramRef}
				src='./icons8-instagram.svg'
				alt='instagram'
				size={140}
				color='secondary-100'
			/>
			<ContactLink
				href='https://github.com/k-stopczynska'
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
