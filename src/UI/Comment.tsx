import React from 'react';
import Author from './Author';

const Comment = ({ user, createdAt, desc }: any) => {
	return (
		<div className='flex flex-col w-full max-h-min border gap-4 p-4 shadow-light-100 shadow-sm'>
			<p>{desc}</p>
			<Author
				author={user.name}
				image={user.image}
				timestamp={createdAt.split('T')[0]}
			/>
		</div>
	);
};

export default Comment;
