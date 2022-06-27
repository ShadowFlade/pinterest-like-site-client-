/// <reference types="react" />
import './LoginModal.scss';
export interface ILoginModalProps {
    closeModal: () => void;
}
export default function LoginModal({ closeModal }: ILoginModalProps): JSX.Element;
