import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { reactQueryConfig } from './variables';
import keys from './keys';
import App from './App';
import './style.scss';
import './scss/custom/main.scss';
import ContextProvider from './Context/Context';

const axiosConfig = {
	baseURL: keys.serverURL,
	withCredentials: true,
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	'Access-Control-Allow-Origin': `${keys.frontURL}, https://res.cloudinary.com,${keys.serverURL}`,
};
const root = document.querySelector('#root');

const queryClient = new QueryClient({ defaultOptions: { queries: { ...reactQueryConfig } } });
// @ts-ignore
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<BrowserRouter basename="/index.html">
					<App />
					<ReactQueryDevtools />
				</BrowserRouter>
			</ContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	root
);

export default queryClient;
export { axiosConfig };
