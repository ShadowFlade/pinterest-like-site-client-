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

export default queryClient;
