'use client';
import React from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const Modal = () => {
	const searchParams = useSearchParams();
	const modal = searchParams.get('modal');
	const variant = searchParams.get('variant');
	const pathname = usePathname();
	let title =
		variant === 'cv'
			? 'CV'
			: variant === 'tech'
			? 'Tech Stack'
			: 'Projects';

	let content =
		variant === 'cv'
			? 'This is CV image component'
			: variant === 'tech'
			? 'This is tech stack component'
			: 'This is projects component';
	return (
		<>
			{modal && (
				<dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
					<div className='bg-white m-auto p-8'>
						<div className='flex flex-col items-center'>
							<h3>{title}</h3>
							<p>{content}</p>
							<Link href={pathname}>
								<button className='shadow text-center rounded py-3 px-6 mt-4'>
									close
								</button>
							</Link>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
};

export default Modal;
