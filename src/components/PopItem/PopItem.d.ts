import * as React from 'react';
import './PopItem.scss';
export interface IPopItemProps {
    children: React.ReactElement;
    clickElement: HTMLElement;
    show: React.Dispatch<React.SetStateAction<boolean>>;
    isShow: boolean;
}
export default function PopItem({ children, clickElement, show, isShow }: IPopItemProps): JSX.Element;
