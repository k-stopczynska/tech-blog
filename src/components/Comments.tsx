'use client';

import React, { Suspense, FormEvent } from 'react';
import useSWR from 'swr';
import CommentInput from '../UI/CommentInput';
import Comment from '../UI/Comment';
import { CommentType } from '@/types';
import { fetcher } from '@/utils/fetcher';
// import Loading from '@/app/loading';

const Comments = ({ postSlug }: { postSlug: string }) => {
	const { data, mutate, isLoading } = useSWR(
		`https://ainspiring.netlify.app/api/comments?postSlug=${postSlug}`,
		fetcher,
	);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputElement = e.currentTarget[0] as HTMLInputElement;
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ desc: inputElement.value, postSlug }),
		});
		mutate();
		inputElement.value = '';
	};

	return (
		<section>
			<h2 className='text-lg md:text-2xl font-bold mb-4'>Comments</h2>
			<CommentInput handleSubmit={handleSubmit} />
			{/* <Suspense fallback={<Loading />}> */}
			<div className='flex flex-col gap-4 mt-10'>
				{data?.map((comment: CommentType) => (
					<Comment {...comment} key={comment._id} />
				))}
			</div>
			{/* </Suspense> */}
		</section>
	);
};

export default Comments;
