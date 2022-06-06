import { axiosConfig } from '../App';
import { Pin } from '../components/PostMainPage/PostMainPage';
import { useQuery } from 'react-query';
import axios from 'axios';
import { reactQueryConfig, STALE_TIME } from '@/variables';

const usePins = () => {
	const fetchPins = async () => {
		return await axios.get('/', axiosConfig).then(({ data }) => data.pinterest as Pin[]);
	};
	return useQuery('pins', fetchPins, reactQueryConfig);
};
export default usePins;
