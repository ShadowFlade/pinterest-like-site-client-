/// <reference types="react" />
// import { IHeaderProps } from './header';
import './Header.scss';
export default function Header({ messagesCount, notifsCount, name, handleModalState, handleLoginModal, handleRegisterModal, handlePinPopupVisible, isAddPinPopupVisible, }: IHeaderProps): JSX.Element;
export interface IHeaderProps {
	isAddPinPopupVisible: boolean;
	handlePinPopupVisible: () => void;
	notifsCount: number;
	messagesCount: number;
	name: string;
	handleModalState: () => void;
	handleRegisterLoginModal: () => void;
	handleLoginModal: () => void;
	handleRegisterModal: () => void;
	setIsLeft: Dispatch<SetStateAction<boolean>>;
}