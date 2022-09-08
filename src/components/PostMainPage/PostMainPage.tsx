import * as React from 'react';

import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { axiosConfig } from '@/index';

import './PostMainPage.scss';
import { MyContext } from '@/Context/Context';
import keys from '@/keys';
import { mapQueryStatusFilter } from 'react-query/types/core/utils';
import { CustomDispatch } from '@/types';
import { MutableRefObject, useEffect, useRef } from 'react';

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
	isLastElement?:boolean;
	observer?:MutableRefObject<IntersectionObserver>
	// ref?:CustomDispatch<HTMLDivElement> | null;
}

const PostMainPage = React.forwardRef(({ img, title, user, reactions, _id,isLastElement,observer }:PinData,ref:MutableRefObject<HTMLDivElement | null>) =>{
	const navigate = useNavigate();
	// const lastPin = useRef<HTMLDivElement | null>(null);
	useEffect(()=>{
		if(isLastElement){
			ref && ref.current && observer ? observer.current.observe(ref.current) : false;
		}
	})
	
	const onClick = ()=>{
		navigate(`/pin/detailed/${_id}`);
	}
	return (
			<div onClick={onClick} className="main-post card" ref={ref}>
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
	);
})

export default PostMainPage