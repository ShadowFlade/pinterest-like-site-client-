import * as React from 'react';
import './ProfileIcon.scss';
export interface IProfileIconProps {
	avatar?: string;
	name: string;
}
export default function ProfileIcon({ avatar, name }: IProfileIconProps) {
	return (
		<div className="profile-icon">
			<span className="position-absolute align-middle translate-middle top-50 ">
				{avatar ? <img src={avatar} /> : name[0]}
			</span>
		</div>
	);
}
