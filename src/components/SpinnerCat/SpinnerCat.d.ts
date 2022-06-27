import * as React from 'react';
import { Dispatch } from 'react';
import './SpinnerCat.scss';
declare const catStyle: {
    backgroundColor: string;
    top: string;
    position: "relative";
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
};
export interface ISpinnerCat {
    setIsCatStyle: Dispatch<React.SetStateAction<boolean>>;
}
export default function SpinnerCat(props: ISpinnerCat): JSX.Element;
export { catStyle };
