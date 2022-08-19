import { Dispatch, SetStateAction } from 'react';
import { Pin, PinData } from '../PostMainPage/PostMainPage';

export interface ICollectionMiniProps {
	showCollectionModal: Dispatch<SetStateAction<boolean>>;
	setActiveCollection: () => void;
	imgs: [string, string | undefined, string | undefined];
	title: string;
}
export type Collection = {
	_id: string;
	pins: PinData[];
	author: string;
	title: string;
};
