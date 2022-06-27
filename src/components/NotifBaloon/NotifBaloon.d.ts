/// <reference types="react" />
import './NotifBaloon.scss';
export interface INotifBaloonProps {
    notifCount: number;
}
export default function NotifBaloon({ notifCount }: INotifBaloonProps): JSX.Element;
