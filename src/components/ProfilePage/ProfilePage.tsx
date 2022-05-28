import * as React from 'react';
import CollectionMini from '../CollectionMini/CollectionMini';
import img1 from '../PostMainPage/imgs/_.jpeg';
import img2 from '../PostMainPage/imgs/8Os5eDI.jpg';
import img3 from '../PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc4 from '../PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc5 from '../PostMainPage/imgs/SQLCommanSQLCheatSheetSQLServerSQLforBeginner.jpeg';
import imgSrc6 from '../PostMainPage/imgs/TheHistoryofWebDesign.jpeg';
import imgSrc7 from '../PostMainPage/imgs/v8mhrscjvbegyopaxuki.png';
import imgSrc8 from '../PostMainPage/imgs/wp3161437.jpg';
import imgSrc9 from '../PostMainPage/imgs/wp3161438.jpg';
import ProfileTabs, { EProfileTabs } from '../ProfileTabs/ProfileTabs';
import CollectionMiniModal from '../CollectionMiniModal/CollectionMiniModal';
import './ProfilePage.scss';
import { useState, useRef } from 'react';
import { instance } from '@/App';

export interface IProfilePageProps {
  avatar: string;
  followers: number;
  following: number;
  name: string;
  // statistics: ProfileStatistics;//TODO think of what to put here
}

export default function ProfilePage({ avatar, followers, following, name }: IProfilePageProps) {
  // instance.get('profile/me').then(({data})=>{

  // })
  const [activeCollection, setActiveCollection] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const collMiniModalRef = useRef();
  const collections = [
    [img1, img2, img3],
    [imgSrc4, imgSrc5, imgSrc6],
    [imgSrc7, imgSrc8, imgSrc9],
  ];
  const collectionsMini = collections.map((item) => (
    <CollectionMini imgs={[item[0], item[1], item[2]]} />
  ));
  const numberOfFollowers = followers > 0 ? followers : 'No one is following you yet...';
  const numberOfFollowing =
    following > 0 ? following : '0(${<a href="/">Want to follow somebody?</a>})';
  const tabProfileContent = (
    <div className="profile-page__collections">
      {collectionsMini.map((collection) => {
        return <div className="profile-page__item">{collection}</div>;
      })}
    </div>
  );
  const tabsAndTabsContent = [
    { title: EProfileTabs.Created, content: tabProfileContent },
    { title: EProfileTabs.Default, content: <div>...</div> },
  ];
  return (
    <div className="profile-page">
      <div className="profile-page__content">
        <header className="profile-page__header">
          <div className="profile-page__avatar">
            <div className="profile-page__pic">
              <img src={avatar} alt="avatar" />
            </div>
            <h1 className="profile-page__name h1">{name}</h1>
            <p className="profile-page__text">
              <p className="profile-page__followers">{numberOfFollowers}</p>
              <p className="profile-page__following">following: {numberOfFollowing}</p>
            </p>
          </div>
        </header>
        <div className="profile-page__collections">
          <ProfileTabs items={tabsAndTabsContent} />
        </div>
      </div>

      <div className="profile-page__statistics"></div>
      <CollectionMiniModal ref={collMiniModalRef} closeModal={closeModal}></CollectionMiniModal>
    </div>
  );
}
