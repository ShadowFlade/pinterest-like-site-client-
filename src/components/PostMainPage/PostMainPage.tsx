import { axiosConfig } from '@/index';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import './PostMainPage.scss';

export interface Pin {
	img: string;
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
	const getImg = () => {
		return axios.get(img, axiosConfig);
	};
	const { data, isSuccess, isError } = useQuery<AxiosResponse<string>>([_id], getImg);
	if (isError) {
		axios.post('/pin/delete', { _id }, axiosConfig).then(({ data }) => {
			console.log(data);
		});
		return null;
	}
	return (
		<Link to={`/pin/detailed/${_id}`} className="main-post__link">
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
					<p className="main-post__author card-text">{author} </p>
					{data ? <div className="main-post__reactions"></div> : ''}
				</div>
			</div>
		</Link>
	);
}
