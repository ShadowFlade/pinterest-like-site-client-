import * as React from 'react';
import { Dispatch } from 'react';

interface IContext {
	isAuth: boolean;
	setIsAuth: Dispatch<React.SetStateAction<boolean>> | undefined;
	user: User | undefined;
	setUser: Dispatch<React.SetStateAction<User | undefined>> | undefined;
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
