import * as React from 'react';
import { Dispatch } from 'react';
import './ContextMenu.scss';
export interface IContextMenuProps {
	show: Dispatch<React.SetStateAction<boolean>>;
}
export default function ContextMenu({ show }: IContextMenuProps): JSX.Element;
