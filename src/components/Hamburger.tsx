'use client';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, status } = useSession();
	const className = !isOpen
		? ' rotate-[90deg] before:translate-x-[-11px]  after:rounded after:translate-x-[7px]'
		: ' rotate-[45deg]  before:rotate-[-90deg] before:translate-x-[-3px]  before:translate-x-[-13px] after:translate-x-[-2px]';

	const navClass = !isOpen ? 'translate-x-[2000px]' : 'translate-x-[0px]';

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<button
				className='h-[40px] w-[40px] '
				onClick={toggleMenu}
				aria-label='hamburger menu'
			>
				<div
					className={`${className} absolute h-[40px] w-[4px] bg-secondary-100 rounded translate-x-[21px] translate-y-[-50%] before:absolute before:h-[40px] before:w-[4px] before:bg-light-100 before:rounded after:absolute after:h-[40px] after:w-[4px] after:bg-light-100 transition-all`}
				></div>
			</button>
			{isOpen && (
				<div
					className={`w-full h-full flex flex-col gap-12 items-center justify-center bg-primary-100 absolute top-24 left-0 text-4xl z-50 ${navClass}`}
				>
					<Link href='/blog' className='link '>
						Blog
					</Link>
					<Link href='/about' className='link'>
						O mnie
					</Link>
					<Link href='/contact' className='link'>
						Kontakt
					</Link>
					{status !== 'authenticated' && (
						<button onClick={() => signIn('google')} type='button'>
							zaloguj
						</button>
					)}
					{status === 'authenticated' && (
						<>
							{data?.user?.name === 'Klaudia Stopczyńska' && (
								<Link href='/write'>Napisz</Link>
							)}

							<button onClick={() => signOut()} type='button'>
								wyloguj
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Hamburger;
