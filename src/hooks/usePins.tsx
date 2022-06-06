import { axiosConfig } from '../App';
import { Pin } from '../components/PostMainPage/PostMainPage';
import { useQuery } from 'react-query';
import axios from 'axios';
import { STALE_TIME } from '@/variables';

const usePins = () => {
	const fetchPins = async () => {
		return await axios.get('/', axiosConfig).then(({ data }) => data.pinterest as Pin[]);
	};
	return useQuery('pins', fetchPins, {
		retry: false,
		staleTime: STALE_TIME,
		cacheTime: 1000,
		refetchOnWindowFocus: false,
		refetchInterval: 1000 * 120,
	});
};
export default usePins;
