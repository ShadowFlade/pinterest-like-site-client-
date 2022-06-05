import { axiosConfig } from '@/App';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import PinAuthorBlock from '../PinAuthorBlock/PinAuthorBlock';
import ContentLoader from 'react-content-loader';
import { Pin } from '../PostMainPage/PostMainPage';
import './PinDetailed.scss';
import { Author, DetailedResponse } from './pin-detailed';

export default function PinDetailed() {
	const { id } = useParams();
	const getData = async (): Promise<AxiosResponse<DetailedResponse>> => {
		return axios.get(`pin/detailed/${id}`, axiosConfig);
	};

	const { data, status, error } = useQuery('getSinglePin', getData, {
		retry: false,
	});
	const isLoading = status === 'loading';
	const isSuccess = status === 'success';
	const { pin, author }: DetailedResponse =
		status === 'success' && data ? data.data : { pin: undefined, author: undefined }; // why if we substitute it with isSuccess it yields a mistake

	const src = isSuccess && pin && typeof pin.img === 'string' ? pin.img : '';
	const img = isLoading ? (
		<ContentLoader height={500} viewBox="0 0 400px 500px">
			<rect x="0" y="0" rx="5" ry="5" width="300" height="300" />{' '}
		</ContentLoader>
	) : (
		<img src={src} alt="" className="pin__img" />
	);
	const avatar = !isLoading && typeof author !== 'string' && author ? author.img : '';
	const description =
		isSuccess && pin ? (
			pin.description
		) : (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		);
	const title =
		isSuccess && pin ? (
			pin.title
		) : (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		);
	const authorBlock =
		status === 'success' && author ? (
			<PinAuthorBlock authorName={author.name || author.email} avatar={''} />
		) : (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		);
	return (
		<div className="bg px-2 py-2">
			<div className="pin">
				<div className="pin__inner d-flex">
					<div className="pin__pic">{img}</div>
					<div className="pin__info">
						{/* <header className="pin__header"></header> */}
						<div className="pin__main mt-5">
							<h2 className="pin__title h2 text-white">{title}</h2>
							<div className="pin__description mt-1">{description}</div>
							<div className="pin__author mt-1">{authorBlock}</div>
						</div>
						<div className="pin__interactions"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
