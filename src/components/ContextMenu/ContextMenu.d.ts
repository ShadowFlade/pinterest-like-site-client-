import * as React from 'react';
import { Dispatch } from 'react';
import './ContextMenu.scss';
export interface IContextmenuProps {
    show: Dispatch<React.SetStateAction<boolean>>;
}
export default function Contextmenu({ show }: IContextmenuProps): JSX.Element;
