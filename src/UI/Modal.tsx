'use client';
import React from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import CVComponent from '@/components/CVComponent';

const Modal = () => {
	const searchParams = useSearchParams();
	const modal = searchParams.get('modal');
	const variant = searchParams.get('variant');
	const pathname = usePathname();

	let content =
		variant === 'cv' ? (
			<CVComponent />
		) : variant === 'tech' ? (
			'This is tech stack component'
		) : (
			'This is projects component'
		);
	return (
		<>
			{modal && (
				<dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-30 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
					<div className='bg-white m-auto p-4'>
						<div className='flex flex-col items-center'>
							<Link href={pathname}>
								<button className='shadow text-center bold text-4xl rounded py-3 px-6 absolute right-4 hover:text-light-100 transition-colors'>
									X
								</button>
							</Link>
							{content}
						</div>
					</div>
				</dialog>
			)}
		</>
	);
};

export default Modal;
