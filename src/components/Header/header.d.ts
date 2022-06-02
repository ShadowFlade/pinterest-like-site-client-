import { Dispatch, SetStateAction } from 'react';

export interface IHeaderProps {
	notifsCount: number;
	messagesCount: number;
	name: string;
	handleModalState: () => void;
	handleRegisterLoginModal: () => void;
	handleLoginModal: () => void;
	handleRegisterModal: () => void;
	setIsLeft: Dispatch<SetStateAction<boolean>>;
}
