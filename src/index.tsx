import axios from 'axios';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/custom/main.scss';
import './style.scss';
import { reactQueryConfig } from './variables';
const root = document.querySelector('#root');

const axiosConfig = {
	baseURL: 'http://localhost:3002/',
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	withCredentials: true,
	'Access-Control-Allow-Origin': 'http://localhost, http://res.cloudinary.com',
};

const queryClient = new QueryClient({ defaultOptions: { queries: { ...reactQueryConfig } } });
// @ts-ignore
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
				<ReactQueryDevtools />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
export { axiosConfig };

export default queryClient;
