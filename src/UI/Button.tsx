import React, { FormEvent } from 'react';

type ButtonPropsType = {
	title: string,
	variant: 'simpleButton'|'simpleNavButton',
	onClick?: (arg: FormEvent) => void,
	type: 'button'|'submit',
	disabled?: boolean
};

const Button = ({
	title,
	variant,
	onClick,
	type,
	disabled,
}: ButtonPropsType) => {
	const baseClass = 'border rounded px-6 py-3 ';
	let variantClass;

	if (variant === 'simpleButton') {
		variantClass = disabled
			? 'border rounded px-6 py-3 opacity-50 cursor-not-allowed'
			: 'bg-secondary-200 rounded px-6 py-2 hover:bg-light-100 focus:bglight-100 hover:text-secondary-200 focus:text-secondary-200 transition duration-700';
	}
	if (variant === 'simpleNavButton') {
		variantClass = ' hidden bg-secondary-200 px-6 py-2 md:flex';
	}

	return (
		<>
			{variant === 'simpleButton' ? (
				<button type={type} className={variantClass} onClick={onClick}>
					{title}
				</button>
			) : (
				<button className={variantClass}>{title}</button>
			)}
		</>
	);
};

export default Button;
