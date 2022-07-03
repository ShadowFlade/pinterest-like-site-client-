import { axiosConfig } from '@/index';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import { DetailedResponse } from '../PinDetailed/pin-detailed';
import PostMainPage, { Pin } from '../PostMainPage/PostMainPage';
import RevolverSpinner from '../RevolerSpinner/RevolverSpinner';
import SpinnerCat from '../SpinnerCat/SpinnerCat';
import './SuggestedPanel.scss';

export interface ISuggestedPanelProps {
	keywords: string[];
	currentPinId: string;
}
export default function SuggestedPanel({ keywords, currentPinId }: ISuggestedPanelProps) {
	const getSuggestedPins = (): Promise<AxiosResponse<Pin[]>> => {
		return axios.post('/pin/suggested', { keywords }, axiosConfig);
	};
	const { data, isSuccess } = useQuery<AxiosResponse<Pin[]>>(
		['suggested-pins', keywords],
		getSuggestedPins
	);
	const pinsList = isSuccess
		? data?.data.map((item) => {
				if (item._id !== currentPinId) {
					return (
						<PostMainPage
							_id={item?._id || ''}
							img={item?.img || ''}
							title={item?.title || ''}
							user={item?.user || ''}
						/>
					);
				} else {
					return;
				}
		  })
		: null;
	return (
		<div className="suggested-panel">
			<div className="suggested-panel__inner">
				{pinsList && pinsList.length > 0 ? (
					<MasonryLayout items={pinsList} />
				) : (
					'no pin here' //TODO change to isDev from context or just delete it and put smth else here
				)}
			</div>
		</div>
	);
}
