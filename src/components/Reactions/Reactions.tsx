import * as React from 'react';
import Emoji from '../Emoji/Emoji';
import EmojiButton from '../EmojiButton/EmojiButton';
import { IReactionsProps } from './reactions';
import './Reactions.scss';

export default function Reactions({ reactions }: IReactionsProps) {
	return (
		<div className="reactions d-flex">
			{reactions.map((item) => (
				<div className="reactions__item mx-1">
					<EmojiButton count={item.amount} emoji={item.emoji} label={item.symbol} />
				</div>
			))}
		</div>
	);
}
