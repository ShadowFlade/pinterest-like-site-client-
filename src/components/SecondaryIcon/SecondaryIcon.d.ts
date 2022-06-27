import * as React from 'react';
import './SecondaryIcon.scss';
export interface ISecondaryIconProps {
    notifsCount: number;
    children: React.ReactElement;
    iconLength?: number;
    iconFill?: string;
}
export default function SecondaryIcon({ notifsCount, children, iconLength, iconFill, }: ISecondaryIconProps): JSX.Element;
