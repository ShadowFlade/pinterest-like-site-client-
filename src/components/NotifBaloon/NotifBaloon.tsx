import * as React from 'react';

export interface INotifBaloonProps {
  notifCount: number;
}

export default function NotifBaloon({ notifCount }: INotifBaloonProps) {
  const length = '1.5rem';
  const style = {
    backgroundColor: 'red',
    color: 'white',
    position: 'absolute' as 'absolute',
    top: '-10px',
    right: '-8px',
    width: length,
    height: length,
    borderRadius: '50%',
    textAlign: 'center' as 'center',
  };

  return (
    <span style={style} className="notif-baloon">
      {notifCount}
    </span>
  );
}
