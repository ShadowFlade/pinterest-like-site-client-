import * as React from 'react';
import { Logout } from '@mui/icons-material';
import axios from 'axios';
import { axiosConfig } from '@/index';
import { Dispatch } from 'react';
import { MyContext } from '@/Context/Context';
import './ContextMenu.scss';
import { nanoid } from 'nanoid';
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

export default function ContextMenu({ show, items, visible }: IContextMenuProps) {
	const { refetch } = React.useContext(MyContext);
	const logout = () => {
		axios.get('auth/logout', axiosConfig).then(({ data }) => {
			if (data.success) {
				show(false);
				refetch ? refetch() : false;
			}
		});
	};
	if (!visible) return null;
	return (
		<div className="context-menu mt-1">
			<div className="context-menu__inner">
				<ul className="context-menu__list">
					{items.map((item) => {
						return (
							<li
								className="context-menu__item context-menu__item--logout"
								key={nanoid()}
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
