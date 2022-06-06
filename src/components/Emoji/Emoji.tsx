import * as React from 'react';
import { useState } from 'react';
import './Emoji.scss';
export interface IEmojiProps {
	symbol: string;
	label: string;
	touched: boolean;
	setTouched: React.Dispatch<React.SetStateAction<boolean>>;
}

const Emoji = ({ label, symbol, touched, setTouched }: IEmojiProps) => {
	const onClick = () => {
		setTouched((c) => !c);
	};
	return (
		<span
			onClick={onClick}
			className={`emoji ${touched ? 'emoji__active' : null}`}
			role="img"
			aria-label={label ? label : ''}
			aria-hidden={label ? 'false' : 'true'}
		>
			{symbol}
		</span>
	);
};

export default Emoji;
