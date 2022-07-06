/// <reference types="react" />
import './ModalTransparentSmall.scss';
export interface IModalTransparentSmallProps {
    isVisible: boolean;
    hide: () => void;
    children: JSX.Element;
    clickElement: HTMLElement;
    transparent?: boolean;
}
export default function ModalTransparentSmall({ isVisible, hide, children, clickElement, transparent, }: IModalTransparentSmallProps): JSX.Element;
