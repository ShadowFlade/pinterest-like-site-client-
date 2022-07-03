import * as React from 'react';
import './Burger.scss';
export interface IBurgerProps {
	children: JSX.Element;
	toggle: (option?: boolean | React.MouseEvent) => void;
}

export default function Burger({ children, toggle }: IBurgerProps) {
	return (
		<div className="burger js-burger">
			<button className="burger__button" onClick={toggle}>
				<span className="burger__base"></span>
			</button>
			<div className="burger__menu">{children}</div>
		</div>
	);
}
