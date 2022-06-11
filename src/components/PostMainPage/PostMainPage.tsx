import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostMainPage.scss';

export interface Pin {
	img: string | File;
	title: string;
	author: string | undefined;
	type?: string;
	readonly _id: string;
	keywords?: string[];
	reactions?: {
		emoji: string;
		emojiCount: number;
		likesCount: number;
	};
	description?: string;
}

export default function PostMainPage({ img, title, author, reactions, _id }: Pin) {
	const [elem, setElem] = useState<JSX.Element | null>(null);
	const imgPromise: Promise<AxiosResponse<Pin>> | null =
		typeof img === 'string' ? axios.get(img) : null;
	const isDone = useRef(false);
	if (!isDone.current) {
		imgPromise
			?.then(
				() => {
					setElem(
						<Link to={`/pin/detailed/${_id}`} className="main-post__link">
							<div className="main-post card">
								<div className="main-post__pic ">
									<img
										className="main-post__pic-img card-img-top img-fluid"
										loading="lazy"
										src={typeof img === 'string' ? img : ''}
										alt="post"
									/>
								</div>
								<div className="card-body">
									<h5 className="main-post__title card-title">{title}</h5>
									<p className="main-post__author card-text">{author} </p>
									{reactions && <div className="main-post__reactions"></div>}
								</div>
							</div>
						</Link>
					);
					// console.log(img);
				},
				() => {
					setElem(null);
				}
			)
			.catch(() => {
				setElem(null);
			})

			.finally(() => {
				isDone.current = true;
			});
	}

	return elem;
}
