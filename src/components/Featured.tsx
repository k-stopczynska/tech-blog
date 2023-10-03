import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
	return (
		<article className='gradient px-6 py-10 h-full rounded flex flex-col-reverse lg:flex-row flex-1 gap-6'>
			<div className='flex flex-col leading-7 flex-1 text-justify'>
				<p>
					Id semper risus in hendrerit gravida. Eget nullam non nisi
					est sit amet facilisis magna etiam. Gravida dictum fusce ut
					placerat. Elit sed vulputate mi sit. Aliquam sem fringilla
					ut morbi. Et pharetra pharetra massa massa.
				</p>
				<p>
					Porttitor massa id neque aliquam vestibulum morbi. Orci
					porta non pulvinar neque laoreet suspendisse interdum
					consectetur libero. Pulvinar mattis nunc sed blandit libero
					volutpat. Aliquam sem et tortor consequat id porta nibh
					venenatis.
				</p>
				<Link
					href='/'
					className='shadow max-w-[35%] rounded py-3 px-6 mt-4'
				>
					Read more
				</Link>
			</div>
			<div className='flex-1 flex flex-col justify-between gap-4 items-center lg:gap-0'>
				<h2 className='text-4xl font-semibold'>
					The one about new beginnings...
				</h2>

				<Image
					src='/coder.jpg'
					alt='coder ghost'
					className='invert rounded'
					width={400}
					height={100}
				/>
			</div>
		</article>
	);
};

export default Featured;
