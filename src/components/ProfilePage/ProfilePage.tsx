import * as React from 'react';
import { Collection, ProfileStatistics } from './profile-page';

export interface IProfilePageProps {
  avatar: string;
  collections: Collection[];
  statistics: ProfileStatistics;
}

export default function ProfilePage(props: IProfilePageProps) {
  return (
    <div className="profile-page">
      <div className="profile-page__content">
        <div className="profile-page__avatar">
          <img src="" alt="" />
        </div>
        <div className="profile-page__collections"></div>
      </div>

      <div className="profile-page__statistics"></div>
    </div>
  );
}
