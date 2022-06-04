import * as React from 'react';
import './Reactions.scss';
export interface IReaction {
	emoji: string;
	amount: number;
}
export interface IReactionsProps {
	reactions: IReaction[];
}

export default function Reactions({ reactions }: IReactionsProps) {
	return (
		<div className="reactions d-flex">
			{reactions.map((item) => (
				<div className="reactions__item mx-1">
					<span className="reactions__emoji">{item.emoji}</span>
					<span className="reactions__amount"> {item.amount}</span>
				</div>
			))}
		</div>
	);
}
