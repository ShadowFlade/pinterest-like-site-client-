import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Dispatch } from 'react';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';

export interface IContext {
	isAuth: boolean;
	user: User | null;
	csrf: any;
	refetch: (<TPageData>(
				options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
		  ) => Promise<
				QueryObserverResult<
					{
						isAuth: boolean;
						user: User;
					},
					unknown
				>
		  >)
		| undefined;
}
export enum AccessGroup {
	User = 'User',
	Admin = 'Admin',
}
export interface User {
	name?: string;
	_id: string;
	email: string;
	password: string;
	accessGroup: AccessGroup;
}
