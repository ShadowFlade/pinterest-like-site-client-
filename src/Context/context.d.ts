import * as React from 'react';
import { Dispatch } from 'react';

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
