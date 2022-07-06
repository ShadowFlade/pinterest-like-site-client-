import * as React from 'react';
import { Dispatch } from 'react';
import './ContextMenu.scss';
export interface IContextMenuProps {
    show: Dispatch<React.SetStateAction<boolean>>;
    items: (JSX.Element | null)[];
    visible: boolean;
}
export interface MenuItem {
    text: string | JSX.Element;
    action: () => void;
    modif: string;
}
export default function ContextMenu({ show, items, visible }: IContextMenuProps): JSX.Element | null;
