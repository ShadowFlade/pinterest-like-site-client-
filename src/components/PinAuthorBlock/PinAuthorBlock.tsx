import * as React from 'react';
import { Link } from 'react-router-dom';
import './PinAuthorBlock.scss';

export interface IPinAuthorBlockProps {
	authorName: string;
	avatar: string;
	authorID: string;
}

export default function PinAuthorBlock({ authorName, avatar, authorID }: IPinAuthorBlockProps) {
	return (
		<div className="pin-author">
			<div className="pin-author__callout">
				<strong>Share your feedback</strong>
			</div>
			<div className="pin-author__main">
				<div className="pin-author__info d-flex">
					<div className="pin-author__avatar">
						<img src={avatar} className="pin-author__img" />
					</div>
					<Link
						to={`/profile/${authorID}`}
						className="pin-author__name h4 display-3 ms-2 text-secondary fw-bolder"
					>
						{authorName}
					</Link>
				</div>
			</div>
		</div>
	);
}
