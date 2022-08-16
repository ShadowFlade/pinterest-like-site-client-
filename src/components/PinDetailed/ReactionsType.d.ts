// import { IReaction } from '../Reactions/reactions';
declare const reactions: IReaction[];
export interface IReaction {
	emoji: string;
	amount: number;
	symbol: string;
}
export interface IReactionsProps {
	reactions: IReaction[];
}
export default reactions;
