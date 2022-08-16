/// <reference types="react" />
export function Layout({ handlePinState, isUploadPinOpen, closeModal, mainPage, handlePinPopupVisible, isAddPinPopupVisible, }: ILayoutProps): JSX.Element;
export interface ILayoutProps {
	handlePinPopupVisible: () => void;
	isAddPinPopupVisible: boolean;
	handlePinState: () => void;
	isUploadPinOpen: boolean;
	closeModal: () => void;
	mainPage: React.MutableRefObject<null | HTMLDivElement>;
}