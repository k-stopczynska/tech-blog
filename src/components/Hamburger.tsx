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
					className={`w-full h-[90%] flex flex-col gap-4 items-center justify-center bg-primary-100 absolute top-24 right-0 text-2xl z-50 ${navClass}`}
				>
					<Link href='/blog' className='link ' onClick={toggleMenu}>
						blog
					</Link>
					<Link href='/about' className='link' onClick={toggleMenu}>
						about
					</Link>
					<Link href='/contact' className='link' onClick={toggleMenu}>
						contact
					</Link>
					{status !== 'authenticated' && (
						<button
							onClick={() => signIn('google')}
							type='button'
							className='link'
						>
							sign in
						</button>
					)}
					{status === 'authenticated' && (
						<>
							{data?.user?.name === 'Klaudia Stopczyńska' && (
								<Link
									href='/write'
									className='link'
									onClick={toggleMenu}
								>
									write
								</Link>
							)}

							<button
								onClick={() => signOut()}
								type='button'
								className='link'
							>
								sign out
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Hamburger;
