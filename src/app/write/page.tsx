'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Button from '@/UI/Button';

export default function WritePage() {
	const { status, data } = useSession();
	const [message, setMessage] = useState('');

	if (
		status === 'unauthenticated' ||
		data?.user?.name !== 'Klaudia Stopczyńska'
	) {
		return (
			<Link href='/'>
				<h1>
					You are not authorized to be here, click here to go back to
					main page
				</h1>
			</Link>
		);
	}

	const slugify = (str: string) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const post = {
			title: e.target[0].value,
			slug: slugify(e.target[0].value),
			categorySlug: e.target[1].value,
			img: e.target[2].value || e.target[3].value,
			desc: e.target[4].value,
		};

		const response = await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify(post),
		});

		if (response.status === 200) {
			const data = await response.json();
			setMessage(
				'Post added successfully, click here to go back to Home Page',
			);
		}
	};

	return (
		<form
			method='POST'
			onSubmit={handleSubmit}
			className='w-full flex flex-col items-center gap-2 mb-10'
		>
			<label htmlFor='title'></label>
			<input
				name='title'
				placeholder='Title'
				className='bg-primary-100 border rounded w-full p-4'
			/>
			<label htmlFor='category-select'></label>
			<select
				className='bg-primary-100 border rounded w-full p-4 text-gray-400'
				name='category-select'
			>
				<option value=''>Choose category</option>
				<option value='soft'>soft</option>
				<option value='hard'>hard</option>
				<option value='places'>places</option>
				<option value='materials'>materials</option>
				<option value='lifestyle'>lifestyle</option>
				<option value='games'>games</option>
				<option value='hobbies'>hobbies</option>
			</select>
			<div className='flex w-full gap-4 pt-2'>
				<label htmlFor='image-url'></label>
				<input
					name='image-url'
					placeholder='Image URL'
					className='bg-primary-100 border rounded w-full p-4 flex-1 ml-[-16px]'
				/>
				<span>or choose one</span>
				<label htmlFor='image-select'></label>
				<select
					className='bg-primary-100 border rounded w-full p-4 flex-1 text-gray-400'
					name='image-select'
				>
					<option value=''>Choose image</option>
					<option value='/soft.jpeg'>soft</option>
					<option value='/hard.jpeg'>hard</option>
					<option value='/book.jpeg'>materials</option>
					<option value='/*.jpeg'>lifestyle</option>
					<option value='/*.jpeg'>games</option>
					<option value='/*.jpeg'>hobbies</option>
				</select>
			</div>
			<label htmlFor='post'></label>
			<textarea
				name='post'
				rows={20}
				className='bg-primary-100 border rounded w-full p-4'
				placeholder='Post'
			/>
			<Button
				type='submit'
				variant='simpleButton'
				source=''
				url=''
				title='Send'
				name='send'
			/>
			<Link href='/' className='text-xl border'>
				{message}
			</Link>
		</form>
	);
}