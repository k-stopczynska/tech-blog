'use client';
import React, { FormEvent} from 'react';
import { useSession } from 'next-auth/react';
import Button from './Button';

const CommentInput = ({ handleSubmit }: { handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> }) => {
	const { status } = useSession();

	return (
		<>
			{status !== 'authenticated' && (
				<p>You have to be logged in to leave a comment</p>
			)}
			{status === 'authenticated' && (
				<form method='POST' onSubmit={handleSubmit} className='w-full'>
					<label htmlFor='message'></label>
					<textarea
						name='message'
						rows={5}
						className='text-primary-100 bg-light-100 w-full p-4 rounded'
					/>
					<Button
						type='submit'
						variant='simpleButton'
						title='Send'
					/>
				</form>
			)}
		</>
	);
};

export default CommentInput;
