import { Pin } from '../PostMainPage/PostMainPage';

export interface ICollectionMiniProps {
	imgs: [string, string, string];
}
export type Collection = {
	pins: Pin[];
	owner: string;
};
