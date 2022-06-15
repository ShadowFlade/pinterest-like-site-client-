import { Pin } from '../PostMainPage/PostMainPage';

export interface ICollectionMiniProps {
	imgs: [string, string | undefined, string | undefined];
}
export type Collection = {
	_id: string;
	pins: Pin[];
	author: string;
	title: string;
};
