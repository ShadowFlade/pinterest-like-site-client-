import * as React from 'react';
import './NotifBaloon.scss';
export interface INotifBaloonProps {
	notifCount: number;
}

export default function NotifBaloon({ notifCount }: INotifBaloonProps) {
	return (
		<div className="notif-baloon">
			<span className="notif-baloon__count">{notifCount}</span>
		</div>
	);
}
