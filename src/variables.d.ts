declare const BASE_URL: string;
declare const STALE_TIME: number;
declare const reactQueryConfig: {
    retry: boolean;
    staleTime: number;
    refetchOnWindowFocus: boolean;
    refetchInterval: number;
};
export { STALE_TIME, reactQueryConfig, BASE_URL };
