import * as React from 'react';

export interface Pin {
	img: string | File;
	title: string;
	author: string;
	type?: string;
	readonly _id: string;
	reactions?: {
		emoji: string;
		emojiCount: number;
		likesCount: number;
	};
	description?: string;
}

export default function PostMainPage({ img, title, author, reactions, _id }: Pin) {
	return (
		<a className="main-post__link" href={`/pin/detailed/${_id}`}>
			<div className="main-post card">
				<div className="main-post__pic ">
					<img
						className="main-post__pic-img card-img-top img-fluid"
						loading="lazy"
						src={typeof img === 'string' ? img : img.name}
						alt="post"
					/>
				</div>
				<div className="card-body">
					<h5 className="main-post__title card-title">{title}</h5>
					<p className="main-post__author card-text">{author} </p>
					{reactions && <div className="main-post__reactions"></div>}
				</div>
			</div>
		</a>
	);
}
