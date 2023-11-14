import React, { forwardRef, Ref } from 'react';
import Link from 'next/link';
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
				className={`absolute w-[${size}px] h-[${size}px] top-[-50%] left-[50%] bg-${color} rounded-full`}
			>
				<Image src={src} alt={alt} width={size} height={size} />
			</a>
		);
	},
);

export default ContactLink;
