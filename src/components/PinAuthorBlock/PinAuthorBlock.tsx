import * as React from 'react';
import LikeButton from '../LikeButton/LikeButton';
import Reactions, { IReaction } from '../Reactions/Reactions';

export interface IPinAuthorBlockProps {
	authorName: string;
	avatar: string;
}

export default function PinAuthorBlock({ authorName, avatar }: IPinAuthorBlockProps) {
	const reactions: IReaction[] = [
		{
			emoji: 'U+1F600',
			amount: 5,
		},
		{
			emoji: 'U+1F618 	',
			amount: 2,
		},
		{
			emoji: 'U+1F911',
			amount: 5,
		},
		{
			emoji: 'U+1F62A',
			amount: 10,
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
					<h2 className="pin-author__name">{authorName}</h2>
					<div className="pin-author__interact">
						<LikeButton numberOfLikes={5} />
						<Reactions reactions={reactions} />
					</div>
				</div>
			</div>
		</div>
	);
}
