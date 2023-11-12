import React from 'react';
import Author from './Author';
import { CommentType } from '@/types';

const Comment = ({ user, createdAt, desc }: CommentType) => {
	console.log(user)
	return (
		<div className='flex flex-col w-full max-h-min border rounded gap-4 p-4 shadow-light-100 shadow-sm'>
			<p>{desc}</p>
			<Author
				author={user.name}
				image={user.image}
				timestamp={createdAt.toLocaleString().split('T')[0]}
			/>
		</div>
	);
};

export default Comment;
