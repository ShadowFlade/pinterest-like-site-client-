import { Pin, PinData } from '../components/PostMainPage/PostMainPage';
import { useQuery } from 'react-query';
import axios from 'axios';
import { reactQueryConfig, STALE_TIME } from '@/variables';
import { axiosConfig } from '..';
import keys from '@/keys';


const usePins = (page:number) => {
	const fetchPins = async () => {
		return await axios.get(`/pins/${page * keys.PINS_PER_PAGE}`, axiosConfig).then(({ data }) => data.pinterest as PinData[]);
	};
	return useQuery(['pins'], fetchPins, { ...reactQueryConfig, refetchOnReconnect: false });
};
export default usePins;
