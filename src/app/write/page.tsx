'use client';
import React, { useState, FormEvent } from 'react';
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const title = e.currentTarget[0] as HTMLInputElement;
		const categorySlug = e.currentTarget[1] as HTMLInputElement;
		const imgUpload = e.currentTarget[2] as HTMLInputElement;
		const imgDownload = e.currentTarget[3] as HTMLInputElement;
		const desc = e.currentTarget[4] as HTMLInputElement;
		const post = {
			title: title.value,
			slug: slugify(title.value),
			categorySlug: categorySlug.value,
			img: imgUpload.value || imgDownload.value,
			desc: desc.value,
		};

		const response = await fetch('/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
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
					<option value='/coder.jpg'>soft</option>
					<option value='/hard.jpg'>hard</option>
					<option value='/materials.jpg'>materials</option>
					<option value='/city.jpg'>places</option>
					<option value='/lifestyle.jpeg'>lifestyle</option>
					<option value='/games.jpg'>games</option>
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
				title='Send'

			/>
			<Link href='/' className='text-xl border'>
				{message}
			</Link>
		</form>
	);
}
