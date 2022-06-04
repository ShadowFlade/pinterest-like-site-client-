import { Pin } from '../PostMainPage/PostMainPage';

export interface IPinDetailed {
	_id: string;
}
export interface Author {
	name: string;
	img: string | File;
	readonly _id: string;
}
export interface DetailedResponse {
	pin: Pin;
	author: Author | undefined;
}
