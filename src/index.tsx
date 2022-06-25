import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { reactQueryConfig } from './variables';
import App from './App';
import './style.scss';
import './scss/custom/main.scss';
import ContextProvider from './Context/Context';

const axiosConfig = {
	baseURL: 'http://localhost:3002/',
	withCredentials: true,

	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	'Access-Control-Allow-Origin': 'http://localhost, http://res.cloudinary.com',
};
const root = document.querySelector('#root');

const queryClient = new QueryClient({ defaultOptions: { queries: { ...reactQueryConfig } } });
// @ts-ignore
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<BrowserRouter>
					<App />
					<ReactQueryDevtools />
				</BrowserRouter>
			</ContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

export default queryClient;
export { axiosConfig };
