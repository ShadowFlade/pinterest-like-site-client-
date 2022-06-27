import * as React from 'react';
import './Emoji.scss';
export interface IEmojiProps {
    symbol: string;
    label: string;
    touched: boolean;
    setTouched: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Emoji: ({ label, symbol, touched, setTouched }: IEmojiProps) => JSX.Element;
export default Emoji;
