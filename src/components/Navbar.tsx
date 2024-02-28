import React from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

const Navbar = () => {
	return (
		<nav className='h-24 w-full flex items-center justify-between sticky top-0 z-50 bg-primary-100'>
			<Link href='/'>
				<h3 className='relative uppercase text-3xl font-bold'>
					<span className='span-blink absolute text-secondary-100'>
						&nbsp;a
					</span>
					<span className='span-blink-reversed absolute text-secondary-200'>
						in
					</span>
					<span className='ml-9'>spiring</span>
				</h3>
			</Link>
			<Hamburger />
		</nav>
	);
};

export default Navbar;
