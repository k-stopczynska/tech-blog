'use client';

import React, { Suspense } from 'react';
import useSWR from 'swr';
import CommentInput from '../UI/CommentInput';
import Comment from '../UI/Comment';
// import Loading from '@/app/loading';

const fetcher = async (url: string) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};

const Comments = ({ postSlug }: any) => {
	const { data, mutate, isLoading } = useSWR(
		`https://localhost:3000/api/comments?postSlug=${postSlug}`,
		fetcher,
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ desc: e.target[0].value, postSlug }),
		});
		mutate();
		e.target[0].value = '';
	};

	return (
		<section>
			<h2 className='text-lg md:text-2xl font-bold mb-4'>Komentarze</h2>
			<CommentInput handleSubmit={handleSubmit} />
			{/* <Suspense fallback={<Loading />}> */}
				<div className='flex flex-col gap-4 mt-10'>
					{data?.map((comment: any) => (
						<Comment {...comment} key={comment._id} />
					))}
				</div>
			{/* </Suspense> */}
		</section>
	);
};

export default Comments;
