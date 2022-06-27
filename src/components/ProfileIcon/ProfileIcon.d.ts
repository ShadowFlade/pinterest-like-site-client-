/// <reference types="react" />
import './ProfileIcon.scss';
export interface IProfileIconProps {
    avatar?: string;
    name: string;
}
export default function ProfileIcon({ avatar, name }: IProfileIconProps): JSX.Element;
