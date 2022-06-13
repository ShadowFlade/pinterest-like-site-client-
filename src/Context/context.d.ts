import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Dispatch } from 'react';
import { QueryObserverResult } from 'react-query';

interface IContext {
	isAuth: boolean;
	user: User | null;
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
