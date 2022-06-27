import { QueryClient } from 'react-query';
import './style.scss';
import './scss/custom/main.scss';
declare const axiosConfig: {
    baseURL: string;
    withCredentials: boolean;
    'Content-Type': string;
    'Access-Control-Allow-Credentials': boolean;
    'Access-Control-Allow-Methods': string;
    'Access-Control-Allow-Headers': string;
    'Access-Control-Allow-Origin': string;
};
declare const queryClient: QueryClient;
export default queryClient;
export { axiosConfig };
