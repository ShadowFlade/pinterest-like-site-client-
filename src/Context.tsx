import axios from 'axios';
import * as React from 'react';
import { Dispatch, useState } from 'react';
import { axiosConfig } from './App';
interface IContext {
	isAuth: boolean;
	setIsAuth: Dispatch<React.SetStateAction<boolean>> | undefined;
}

export const MyContext = React.createContext<IContext>({ isAuth: false, setIsAuth: undefined });

const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const [isAuth, setIsAuth] = useState(false);
	axios.get('/login/auth', axiosConfig).then(async ({ data }) => {
		if (data.isAuth) {
			setIsAuth(true);
		}
	});
	const defaultState = {
		isAuth,
		setIsAuth,
	};

	return <MyContext.Provider value={defaultState}>{children}</MyContext.Provider>;
};
export default ContextProvider;
