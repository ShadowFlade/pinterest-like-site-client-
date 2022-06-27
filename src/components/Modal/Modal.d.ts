import * as React from 'react';
import './Modal.scss';
export interface IMyModal {
    isUploadPinOpen: boolean;
    title: string;
    children: React.ReactElement;
    closeModal: () => void;
}
declare const MyModal: React.ForwardRefExoticComponent<IMyModal & React.RefAttributes<HTMLDivElement>>;
export default MyModal;
