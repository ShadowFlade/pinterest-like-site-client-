import { axiosConfig } from '@/App';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { DetailedResponse } from '../PinDetailed/pin-detailed';
import PostMainPage, { Pin } from '../PostMainPage/PostMainPage';
import SpinnerCat from '../SpinnerCat/SpinnerCat';

export interface ISuggestedPanelProps {
	keywords: string[];
}

export default function SuggestedPanel({ keywords }: ISuggestedPanelProps) {
	const getSuggestedPins = (): Promise<AxiosResponse<DetailedResponse[]>> => {
		return axios.post('/suggested', keywords, axiosConfig);
	};
	const { data, isLoading, isSuccess } = useQuery<AxiosResponse<DetailedResponse[]>>(
		['suggested-pins', keywords],
		getSuggestedPins
	);
	const pinsList = isSuccess
		? data?.data.map((item) => {
				const { pin, author } = item;
				return (
					<PostMainPage
						_id={item.author ? item.author?._id : ''}
						img={pin?.img || ''}
						title={pin?.title || ''}
						author={pin?.author || ''}
					/>
				);
		  })
		: null;
	return (
		<div className="suggested-panel">
			<div className="suggested-panel__inner">
				{/* {isLoading ? <SpinnerCat /> : isSuccess ? pinsList : ''} */}
				<SpinnerCat />
			</div>
		</div>
	);
}
