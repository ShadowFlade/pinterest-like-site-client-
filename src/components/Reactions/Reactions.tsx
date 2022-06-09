import { nanoid } from 'nanoid';
import * as React from 'react';
import Emoji from '../Emoji/Emoji';
import EmojiButton from '../EmojiButton/EmojiButton';
import { IReactionsProps } from './reactions';
import './Reactions.scss';

export default function Reactions({ reactions }: IReactionsProps) {
	return (
		<div className="reactions d-flex flex-wrap">
			{reactions.map((item) => (
				<div key={nanoid()} className="reactions__item mx-1">
					<EmojiButton count={item.amount} emoji={item.emoji} label={item.symbol} />
				</div>
			))}
		</div>
	);
}
