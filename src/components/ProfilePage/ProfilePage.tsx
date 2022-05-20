import * as React from 'react';
import { ICollectionMiniProps } from '../CollectionMini/collection-mini';
import CollectionMini from '../CollectionMini/CollectionMini';
import { ProfileStatistics } from './profile-page';
import img1 from '../PostMainPage/imgs/_.jpeg';
import img2 from '../PostMainPage/imgs/8Os5eDI.jpg';
import img3 from '../PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc4 from '../PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc5 from '../PostMainPage/imgs/SQLCommanSQLCheatSheetSQLServerSQLforBeginner.jpeg';
import imgSrc6 from '../PostMainPage/imgs/TheHistoryofWebDesign.jpeg';
import imgSrc7 from '../PostMainPage/imgs/v8mhrscjvbegyopaxuki.png';
import imgSrc8 from '../PostMainPage/imgs/wp3161437.jpg';
import imgSrc9 from '../PostMainPage/imgs/wp3161438.jpg';
import './ProfilePage.scss';
import MasonryLayout from '../MasonryLayout/MasonryLayout';

export interface IProfilePageProps {
  avatar: string;
  followers: number;
  following: number;
  // statistics: ProfileStatistics;//TODO think of what to put here
}

export default function ProfilePage({ avatar, followers, following }: IProfilePageProps) {
  const collections = [
    [img1, img2, img3],
    [imgSrc4, imgSrc5, imgSrc6],
    [imgSrc7, imgSrc8, imgSrc9],
  ];
  const collectionsMini = collections.map((item) => (
    <CollectionMini imgs={[item[0], item[1], item[2]]} />
  ));
  return (
    <div className="profile-page">
      <div className="profile-page__content">
        <header className="profile-page__header">
          <div className="profile-page__avatar">
            <img src={avatar} alt="avatar" />

            <p className="profile-page__text display-6">
              <span className="profile-page__followers">
                {followers > 0 ? followers : 'No one is following you yet...'}
              </span>
              <span className="profile-page__following">
                {following > 0 ? following : '0(${<a href="/">Want to follow somebody?</a>})'}
              </span>
            </p>
          </div>
        </header>

        <div className="profile-page__collections">
          {collectionsMini.map((collection) => {
            return <div className="profile-page__item">{collection}</div>;
          })}
        </div>
      </div>

      <div className="profile-page__statistics"></div>
    </div>
  );
}
