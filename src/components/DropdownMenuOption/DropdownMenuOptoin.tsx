import * as React from 'react';
import { lazy, Suspense } from 'react';
import './DropdownMenuOption.scss';
export interface IDropdownMenuOptionProps {
	icon?: JSX.Element;
	action: () => void;
	modif?: string;
	text: string;
}

export default function DropdownMenuOption({
	action,
	modif,
	icon,
	text,
}: IDropdownMenuOptionProps) {
	return (
		<div className="menu-option" onClick={action}>
			{icon && <span className={`context-menu__icon context-menu__${modif}`}>{icon}</span>}
			<span className="context-menu__option">{text}</span>
		</div>
	);
}
