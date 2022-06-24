import { Dispatch, SetStateAction } from 'react';
import { Pin } from '../PostMainPage/PostMainPage';

export interface ICollectionMiniProps {
	showCollectionModal: Dispatch<SetStateAction<boolean>>;
	setActiveCollection: () => void;
	imgs: [string, string | undefined, string | undefined];
	title: string;
}
export type Collection = {
	_id: string;
	pins: Pin[];
	author: string;
	title: string;
};
