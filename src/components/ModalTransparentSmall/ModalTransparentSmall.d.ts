/// <reference types="react" />
import './ModalTransparentSmall.scss';
export interface IModalTransparentSmallProps {
    isVisible: boolean;
    hide: () => void;
    children: JSX.Element;
    clickElement: HTMLElement;
}
export default function ModalTransparentSmall({ isVisible, hide, children, clickElement, }: IModalTransparentSmallProps): JSX.Element;
