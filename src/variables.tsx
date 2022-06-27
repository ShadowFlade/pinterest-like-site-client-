import keys from './keys';

const BASE_URL = keys.baseURL;
const STALE_TIME = 1000 * 120;
const reactQueryConfig = {
	retry: false,
	staleTime: STALE_TIME,
	refetchOnWindowFocus: false,
	refetchInterval: STALE_TIME,
};
export { STALE_TIME, reactQueryConfig, BASE_URL };
