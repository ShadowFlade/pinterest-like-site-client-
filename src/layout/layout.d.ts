import { CustomDispatch } from '@/types';

export interface ILayoutProps {
	handlePinPopupVisible: () => void;
	isAddPinPopupVisible: boolean;
	handlePinState: () => void;
	isUploadPinOpen: boolean;
	closeModal: () => void;
	mainPage: React.MutableRefObject<null | HTMLDivElement>;
}
