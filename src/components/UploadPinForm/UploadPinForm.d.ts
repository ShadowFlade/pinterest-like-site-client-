/// <reference types="react" />
import './UploadPinForm.scss';
import { IUploadPinFormProps } from './upload-pin-form';
export interface PinUploadData {
    title: string;
    img: string;
    authorId: string;
}
export default function UploadPinForm({ closeModal }: IUploadPinFormProps): JSX.Element;
