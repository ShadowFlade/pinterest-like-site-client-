import * as React from 'react';
import './NotifBaloon.scss';
export interface INotifBaloonProps {
  notifCount: number;
}

export default function NotifBaloon({ notifCount }: INotifBaloonProps) {
  return <span className="notif-baloon">{notifCount}</span>;
}
