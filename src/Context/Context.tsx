import { Login } from '@mui/icons-material';
import axios from 'axios';
import { ObjectId } from 'mongodb';
import * as React from 'react';

import { Dispatch, useCallback, useMemo, useState, memo, useEffect } from 'react';
import { axiosConfig } from '../App';
import { IContext, User } from './context';

export const MyContext = React.createContext<IContext>({
	isAuth: false,
	setIsAuth: undefined,
	user: undefined,
	setUser: undefined,
});

const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [user, setUser] = useState<User | undefined>(undefined);
	const login = async () => {
		return await axios.get('/login/auth', axiosConfig).then(async ({ data }) => {
			if (data.isAuth) {
				setUser(data.user);
				setIsAuth(true);
			}
		});
	};

	useEffect(() => {
		login();
	}, []);

	const defaultState = {
		isAuth,
		setIsAuth,
		user,
		setUser,
	};

	return <MyContext.Provider value={defaultState}>{children}</MyContext.Provider>;
};
export default ContextProvider;
