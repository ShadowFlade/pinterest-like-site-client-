/// <reference types="react" />
// import { IReactionsProps } from './reactions';
import './Reactions.scss';
export default function Reactions({ reactions }: IReactionsProps): JSX.Element;
export interface IReaction {
	emoji: string;
	amount: number;
	symbol: string;
}
export interface IReactionsProps {
	reactions: IReaction[];
}