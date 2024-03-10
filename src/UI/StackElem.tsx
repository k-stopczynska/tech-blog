import React from 'react';

const StackElem = ({
	stack,
	stackIndex,
}: {
	stack: string;
	stackIndex: number;
}) => {
	return (
		<li
			key={stackIndex}
			className='py-1 px-2 text-sm bg-[#2B3E52] rounded shadow-md '
		>
			{stack}
		</li>
	);
};

export default StackElem;
