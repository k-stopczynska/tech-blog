import React from 'react';

const Content = ({ desc, variant }: { desc: string, variant: string }) => {
    const content = variant === 'post' ? desc : variant === 'featured' ? desc.substring(0, 600) + '...' : desc.substring(0, 120) + '...'
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		></div>
	);
};

export default Content;
