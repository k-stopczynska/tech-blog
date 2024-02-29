import React, { forwardRef } from 'react';
import Image from 'next/image';

interface ContactLinkProps {
	href: string;
	src: string;
	alt: string;
	color: string;
	size: number;
}

const ContactLink = forwardRef<HTMLAnchorElement, ContactLinkProps>(
	({ href, src, alt, color, size }, ref) => {
		return (
			<a
				href={href}
				ref={ref}
				target='_blank'
				className={`absolute w-[${size}px] h-[${size}px] top-[-50%] left-[50%] bg-${color} p-2 rounded-full hover:invert focus:invert transition-colors`}
			>
				<Image src={src} alt={alt} width={size} height={size} />
			</a>
		);
	},
);

ContactLink.displayName = 'ContactLink';

export default ContactLink;
