import * as React from 'react';
import { Logout } from '@mui/icons-material';
import './ContextMenu.scss';
import axios from 'axios';
import { axiosConfig } from '@/index';
import { Dispatch } from 'react';
import { MyContext } from '@/Context/Context';
export interface IContextmenuProps {
	show: Dispatch<React.SetStateAction<boolean>>;
}

export default function Contextmenu({ show }: IContextmenuProps) {
	const { refetch } = React.useContext(MyContext);
	const logout = () => {
		axios.get('auth/logout', axiosConfig).then(({ data }) => {
			console.log(data);
			if (data.success) {
				show(false);
				refetch ? refetch() : false;
			}
		});
	};
	return (
		<div className="context-menu">
			<div className="context-menu__inner">
				<ul className="context-menu__list">
					<li className="context-menu__item">
						<span className="context-menu__icon"></span>
						<span className="context-menu__option"></span>
					</li>
					<li className="context-menu__item">
						<span className="context-menu__icon"></span>
						<span className="context-menu__option"></span>
					</li>
					<li className="context-menu__item context-menu__item--logout" onClick={logout}>
						<span className="context-menu__icon">
							<Logout />
						</span>
						<span className="context-menu__option">Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
