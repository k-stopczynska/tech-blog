import React from 'react';

const CardContent = (desc: { desc: string }) => {
	return (
		<div
			className='content'
			dangerouslySetInnerHTML={{
				__html: desc.desc.substring(0, 120),
			}}
		></div>
	);
};

export default CardContent;
