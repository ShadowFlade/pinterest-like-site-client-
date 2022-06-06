export interface ILayoutProps {
	handlePinState: () => void;
	isUploadPinOpen: boolean;
	closeModal: () => void;
	mainPage: React.MutableRefObject<null | HTMLDivElement>;
}
