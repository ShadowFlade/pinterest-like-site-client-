import * as React from 'react';

import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { axiosConfig } from '@/index';

import './PostMainPage.scss';
import { MyContext } from '@/Context/Context';
import keys from '@/keys';
import { mapQueryStatusFilter } from 'react-query/types/core/utils';

export interface Pin {
	img: string;
	title: string;
	userName: string | undefined;
	type?: string;
	readonly _id: string;
	keywords?: string[];
	collections?: string[];
	reactions?: {
		emoji: string;
		emojiCount: number;
		likesCount: number;
	};
	description?: string;
}
export interface PinData {
	img: string;
	title: string;
	user: { _id: string; email: string; name?: string };
	type?: string;
	readonly _id: string;
	keywords?: string[];
	collections?: string[];
	reactions?: {
		emoji: string;
		emojiCount: number;
		likesCount: number;
	};
	description?: string;
}

export default function PostMainPage({ img, title, user, reactions, _id }: PinData) {
	return (
		<Link to={`pin/detailed/${_id}`} className="main-post__link">
			<div className="main-post card">
				<div className="main-post__pic ">
					<img
						className="main-post__pic-img card-img-top img-fluid"
						loading="lazy"
						src={img}
						alt="post"
					/>
				</div>
				<div className="card-body">
					<h5 className="main-post__title card-title">{title}</h5>
					<Link className="main-post__author card-text" to={`/profile/${user._id}`}>
						{user.email || user.name || ''}
					</Link>
				</div>
			</div>
		</Link>
	);
}