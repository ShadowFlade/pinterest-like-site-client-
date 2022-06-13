import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import PinAuthorBlock from '../PinAuthorBlock/PinAuthorBlock';
import ContentLoader from 'react-content-loader';
import { Pin } from '../PostMainPage/PostMainPage';
import { Author, DetailedResponse } from './pin-detailed';
import { reactQueryConfig, STALE_TIME } from '@/variables';
import queryClient, { axiosConfig } from '@/index';
import './PinDetailed.scss';
import LikeButton from '../LikeButton/LikeButton';
import Reactions from '../Reactions/Reactions';
import reactions from './reactions';
import SuggestedPanel from '../SuggestedPanel/SuggestedPanel';
import Spinner, { catStyle } from '../SpinnerCat/SpinnerCat';
import { sample } from '@/utils/utils';

import SpinnerCat from '../SpinnerCat/SpinnerCat';
import RevolverSpinner from '../RevolerSpinner/RevolverSpinner';

export interface Spinner {
	action?: Dispatch<SetStateAction<boolean>>;
	element: JSX.Element;
}

const pickSpinner = (arr: Spinner[]) => {
	const el = sample(arr);
	el.action ? el?.action() : false;
	return el.element;
};
export default function PinDetailed() {
	const [isCatStyle, setIsCatStyle] = useState(false);
	const spinners = [
		{ action: setIsCatStyle, element: <SpinnerCat setIsCatStyle={setIsCatStyle} /> },
		{ element: <RevolverSpinner /> },
	];

	const { id } = useParams();

	const getData = async (): Promise<AxiosResponse<DetailedResponse>> => {
		return axios.get(`pin/detailed/${id}`, axiosConfig);
	};

	const { data, isLoading, isSuccess, error } = useQuery(['getSinglePin', id], getData);
	const { pin, author }: DetailedResponse =
		isSuccess && data ? data.data : { pin: undefined, author: undefined }; // why if we substitute it with isSuccess it yields a mistake

	const src = isSuccess && pin && typeof pin.img === 'string' ? pin.img : '';
	const img = isLoading ? (
		<ContentLoader height={500} viewBox="0 0 400px 500px">
			<rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
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
		isSuccess && author ? (
			<PinAuthorBlock
				authorName={author.name || author.email}
				avatar={''}
				authorID={author._id}
			/>
		) : (
			<ContentLoader height={200} viewBox="0 0 200px 200px">
				<rect x="0" y="0" rx="5" ry="5" width="500" height="100" />
			</ContentLoader>
		);
	const spinner = pickSpinner(spinners) as JSX.Element;

	return (
		<div className="bg px-2 py-2">
			<div className="pin">
				<div className="pin__inner d-flex">
					<div className="pin__pic">{img}</div>
					<div className="pin__info">
						{/* <header className="pin__header"></header> */}
						<div className="pin__main display-4 my-auto">
							<h2 className="pin__title h1 display-2 text-white">{title}</h2>
							<div className="pin__description mt-3 pb-2 border-bottom border-1 border-white">
								{description}
							</div>
							<div className="pin__author mt-5">{authorBlock}</div>
						</div>
						<div className="pin__interactions mt-3">
							<div className="pin__like mt-3">
								<LikeButton numberOfLikes={5} />
							</div>
							<div className="pin__reactions mt-3 display-4">
								<Reactions reactions={reactions} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pin-detailed__suggested" style={isCatStyle ? catStyle : {}}>
				{isLoading ? spinner : <SuggestedPanel keywords={pin?.keywords as string[]} />}
			</div>
		</div>
	);
}
