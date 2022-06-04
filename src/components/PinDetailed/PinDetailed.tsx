import { axiosConfig } from '@/App';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import PinAuthorBlock from '../PinAuthorBlock/PinAuthorBlock';
import ContentLoader from 'react-content-loader';
import { Pin } from '../PostMainPage/PostMainPage';
import './PinDetailed.scss';
import { DetailedResponse } from './pin-detailed';

export default function PinDetailed() {
	const { id } = useParams();
	const getData = async (): Promise<AxiosResponse<DetailedResponse>> => {
		return axios.get(`pin/detailed/${id}`, axiosConfig);
	};

	const { data, status, error } = useQuery('getSinglePin', getData, {
		retry: false,
	});
	const { pin, author } = status === 'success' ? data.data : { pin: '', author: '' };
	const src =
		status === 'success' && typeof pin !== 'string' && typeof pin.img === 'string'
			? pin.img
			: '';
	const img =
		status === 'loading' ? (
			<ContentLoader height={500} viewBox="0 0 400px 500px">
				<rect x="0" y="0" rx="5" ry="5" width="300" height="300" />{' '}
			</ContentLoader>
		) : (
			<img src={src} alt="" className="pin__img" />
		);
	const avatar = status !== 'loading' && typeof author !== 'string' && author ? author.img : '';
	const description =
		status == 'loading' ? (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		) : typeof pin !== 'string' && typeof pin.description == 'string' ? (
			pin.description
		) : (
			''
		);
	const title =
		status === 'loading' ? (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		) : typeof pin !== 'string' ? (
			pin.title
		) : (
			''
		);
	const authorBlock =
		status != 'loading' ? (
			typeof pin !== 'string' ? (
				<PinAuthorBlock authorName={pin.author || ''} avatar={''} />
			) : (
				''
			)
		) : (
			''
		);
	return (
		<div className="bg">
			<div className="pin">
				<div className="pin__inner d-flex">
					<div className="pin__pic">{img}</div>
					<div className="pin__info">
						{/* <header className="pin__header"></header> */}
						<div className="pin__main mt-5">
							<h2 className="pin__title h2 text-white">{title}</h2>
							<div className="pin__description mt-1">{description}</div>
							<div className="pin__author mt-1">{author ? authorBlock : ''}</div>
						</div>
						<div className="pin__interactions"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
