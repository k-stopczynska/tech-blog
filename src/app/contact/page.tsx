'use client';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

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
			duration: 3,
			delay: 2.5,
			ease: 'bounce.out',
			x: 100,
			y: 700,
		});
		const github = gsap.to(githubRef.current, {
			rotation: 360,
			duration: 1,
			delay: .5,
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
			<Link
				href='#'
				ref={emailRef}
				className='absolute w-[100px] h-[100px] top-[-50%] left-[50%]'
			>
				<Image
					src='./icons8-email.svg'
					alt='email'
					width={100}
					height={100}
					className='bg-secondary-100 rounded-full'
				/>
			</Link>

			<Link
				href='#'
				ref={facebookRef}
				className='absolute w-[120px] h-[120px] top-[-50%] left-[50%]'
			>
				<Image
					src='./icons8-facebook.svg'
					alt='facebook'
					width={120}
					height={120}
					className='bg-light-100 rounded-full absolute'
				/>
			</Link>

			<Link
				href='#'
				ref={linkedinRef}
				className='absolute w-[160px] h-[160px] top-[-50%] left-[50%]'
			>
				<Image
					src='./icons8-linkedin.svg'
					alt='linkedIn'
					width={160}
					height={160}
					className='bg-blue-300 rounded-full'
				/>
			</Link>

			<Link
				href='#'
				ref={instagramRef}
				className='absolute w-[140px] h-[140px] top-[-50%] left-[50%] '
			>
				<Image
					src='./icons8-instagram.svg'
					alt='instagram'
					width={140}
					height={140}
					className='bg-yellow-300 rounded-full'
				/>
			</Link>

			<Link
				href='#'
				ref={githubRef}
				className='absolute w-[80px] h-[80px] top-[-50%] left-[50%] '
			>
				<Image
					src='./icons8-github.svg'
					alt='github'
					width={80}
					height={80}
					className='bg-[#BADA55] rounded-full'
				/>
			</Link>
		</section>
	);
};

export default ContactPage;
