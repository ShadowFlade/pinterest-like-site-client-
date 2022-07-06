import { calculateThePositionOfPopupElement } from '@/utils/utils';
import { selectUnstyledClasses } from '@mui/base';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { number } from 'yup';
import './Burger.scss';
export interface IBurgerProps {
	children: JSX.Element;
	toggle: (option?: boolean | React.MouseEvent) => void;
	burgerVisible: boolean;
}

export default function Burger({ children, toggle, burgerVisible }: IBurgerProps) {
	const menu = useRef<HTMLDivElement | null>(null);
	const burger = useRef<HTMLDivElement | null>(null);

	return (
		<div className="burger js-burger" ref={burger}>
			<button className="burger__button" onClick={toggle}>
				<span className="burger__base"></span>
			</button>
			<div className="burger__menu" ref={menu}>
				{children}
			</div>
		</div>
	);
}
