export interface IReaction {
	emoji: string;
	amount: number;
	symbol: string;
}
export interface IReactionsProps {
	reactions: IReaction[];
}
