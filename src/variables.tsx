const STALE_TIME = 5000;
const reactQueryConfig = {
	retry: false,
	staleTime: STALE_TIME,
	cacheTime: 1000,
	refetchOnWindowFocus: false,
	refetchInterval: 1000 * 120,
};
export { STALE_TIME, reactQueryConfig };
