import { DetailedResponse } from '@/components/PinDetailed/pin-detailed';
import { reactQueryConfig } from '@/variables';
import { Login } from '@mui/icons-material';
import axios, { AxiosResponse } from 'axios';
import { ObjectId } from 'mongodb';
import * as React from 'react';

import { Dispatch, useCallback, useMemo, useState, memo, useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { axiosConfig } from '..';
import { IContext, User } from './context';

export const MyContext = React.createContext<IContext>({
	isAuth: false,
	user: null,
	refetch: undefined,
});

const ContextProvider = ({ children }: { children: JSX.Element }) => {
	const login = async () => {
		try {
			const { data } = await axios.get('/auth', axiosConfig);
			return data;
		} catch (reason) {
			return console.error(reason);
		}
	};
	const { data, isSuccess, refetch }: UseQueryResult<{ isAuth: boolean; user: User }> = useQuery(
		'profile-me',
		login,
		reactQueryConfig
	);
	const defaultState = {
		isAuth: data?.isAuth || false,
		user: data?.user || null,
		refetch,
	};

	return <MyContext.Provider value={defaultState}>{children}</MyContext.Provider>;
};
export default ContextProvider;
