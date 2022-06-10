import { axiosConfig } from '@/App';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { DetailedResponse } from '../PinDetailed/pin-detailed';
import PostMainPage, { Pin } from '../PostMainPage/PostMainPage';
import RevolverSpinner from '../RevolerSpinner/RevolverSpinner';
import SpinnerCat from '../SpinnerCat/SpinnerCat';
import './SuggestedPanel.scss';

export interface ISuggestedPanelProps {
	keywords: string[];
}
export default function SuggestedPanel({ keywords }: ISuggestedPanelProps) {
	console.log(keywords, 'KEYWORDS');
	const getSuggestedPins = (): Promise<AxiosResponse<DetailedResponse[]>> => {
		return axios.post('suggested', keywords, axiosConfig);
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
						_id={pin?._id || ''}
						img={pin?.img || ''}
						title={pin?.title || ''}
						author={pin?.author || ''}
					/>
				);
		  })
		: null;
	console.log(data, 'Data');
	return (
		<div className="suggested-panel">
			<div className="suggested-panel__inner">{pinsList}</div>
		</div>
	);
}
