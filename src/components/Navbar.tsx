import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='h-24 w-full flex items-center justify-between'>
			<Link href='/'>
				<h3 className='relative uppercase text-3xl font-bold'>
					<span className='span-blink absolute text-secondary-100'>
						&nbsp;a
					</span>
					<span className='span-blink-reversed absolute text-secondary-200'>
						in
					</span>
					<span className='ml-8'>spiring</span>
				</h3>
			</Link>
			<div>hamburger</div>
		</nav>
	);
};

export default Navbar;
