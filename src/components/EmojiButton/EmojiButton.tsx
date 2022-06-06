import * as React from 'react';
import { useState } from 'react';
import Emoji from '../Emoji/Emoji';
import { IEmojiButtonProps } from './emoji-button';
import './EmojiButton.scss';

export default function EmojiButton({ emoji, count, label }: IEmojiButtonProps) {
	const [touched, setTouched] = useState(false);
	return (
		<div className="emoji-button d-flex ">
			<span className="emoji-button__emoji">
				<Emoji touched={touched} setTouched={setTouched} label={label} symbol={emoji} />
			</span>
			<span
				className="emoji-button__count ms-2"
				style={{ color: touched ? 'white' : 'inherit' }}
			>
				{touched ? count + 1 : count}
			</span>
		</div>
	);
}
