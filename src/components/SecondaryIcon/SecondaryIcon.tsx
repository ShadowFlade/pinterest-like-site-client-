import * as React from 'react';
import NotifBaloon from '../NotifBaloon/NotifBaloon';
import './SecondaryIcon.scss';
export interface ISecondaryIconProps {
  notifsCount: number;
  children: React.ReactElement;
  iconLength?: number;
  iconFill?: string;
}

export default function SecondaryIcon({
  notifsCount,
  children,
  iconLength,
  iconFill,
}: ISecondaryIconProps) {
  // const length = iconLength || '35px';
  // const fill = '#969696' || iconFill;
  return (
    <span className="secondaryIcons">
      {children}
      {notifsCount && <NotifBaloon notifCount={notifsCount} />}
    </span>
  );
}
