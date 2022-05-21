import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/custom/main.scss';
import './style.scss';
const root = document.querySelector('#root');
const queryClient = new QueryClient();
// @ts-ignore
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
