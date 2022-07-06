import * as React from 'react';
import './Burger.scss';
export interface IBurgerProps {
    children: JSX.Element;
    toggle: (option?: boolean | React.MouseEvent) => void;
    burgerVisible: boolean;
}
export default function Burger({ children, toggle, burgerVisible }: IBurgerProps): JSX.Element;
