/// <reference types="react" />
export interface IRegisterFormProps {
    left: boolean;
    closeRegisterModal: () => void;
}
export default function RegisterForm({ left, closeRegisterModal }: IRegisterFormProps): JSX.Element;
