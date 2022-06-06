import * as React from 'react';
import LikeButton from '../LikeButton/LikeButton';
import Reactions from '../Reactions/Reactions';
import { IReaction } from '../Reactions/reactions';
import './PinAuthorBlock.scss';

export interface IPinAuthorBlockProps {
	authorName: string;
	avatar: string;
}

export default function PinAuthorBlock({ authorName, avatar }: IPinAuthorBlockProps) {
	const reactions: IReaction[] = [
		{
			emoji: '🐑',
			amount: 5,
			symbol: 'some emoji',
		},
		{
			emoji: '💗',
			amount: 2,
			symbol: 'some emoji',
		},
		{
			emoji: '😍',
			amount: 5,
			symbol: 'some emoji',
		},
		{
			emoji: '😀',
			amount: 10,
			symbol: 'some emoji',
		},
	];
	return (
		<div className="pin-author">
			<div className="pin-author__callout">
				<strong>Share your feedback</strong>
			</div>
			<div className="pin-author__main">
				<div className="pin-author__avatar">
					<img src={avatar} className="pin-author__img" />
				</div>
				<div className="pin-author__info">
					<h2 className="pin-author__name h4">{authorName}</h2>
					<div className="pin-author__interact">
						<div className="pin-author__like-button">
							<LikeButton numberOfLikes={5} />
						</div>
						<div className="pin-author__reactions mt-1">
							<Reactions reactions={reactions} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
