import * as React from 'react';

import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { axiosConfig } from '@/index';

import './PostMainPage.scss';
import { MyContext } from '@/Context/Context';
import keys from '@/keys';

export interface Pin {
	img: string;
	title: string;
	user: string | undefined;
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

export default function PostMainPage({ img, title, user, reactions, _id }: Pin) {
	const pattern = /cloudinary/;
	const isLocal = pattern.test(img);
	const getImg = () => {
		return axios.get(img, { ...axiosConfig, withCredentials: false });
	};
	const { data, isError } = useQuery<AxiosResponse<string>>([_id], getImg, {
		enabled: isLocal,
	});
	if (isError) {
		axios.post('/pin/delete', { _id }, { ...axiosConfig, withCredentials: false });
		return null;
	}
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
					<p className="main-post__author card-text">{user} </p>
					{data ? <div className="main-post__reactions"></div> : ''}
				</div>
			</div>
		</Link>
	);
}
