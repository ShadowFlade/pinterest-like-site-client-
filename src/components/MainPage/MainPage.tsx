import * as React from 'react';
import { useState, useRef, forwardRef, MutableRefObject } from 'react';
import CookiePrompt from '../CookiePrompt/CookiePrompts';
import Header from '../Header/Header';
import { Post } from '../MasonryLayout/masonry-layout';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import MyModal from '../Modal/Modal';
import PostMainPage from '../PostMainPage/PostMainPage';
import UploadPinForm from '../UploadPinForm/UploadPinForm';
import './MainPage.scss';
export interface IMainPageProps {
  items: Post[];
  isUploadPinOpen: boolean;
  closeModal: () => void;
}

export default function MainPage({ items, isUploadPinOpen, closeModal }: IMainPageProps) {
  const mainPage = useRef(null);

  const onEntered = (ref: MutableRefObject<null | HTMLDivElement>) => {
    // ref.current ? (ref.current.style.paddingLeft = '15px') : null;
    ref.current ? console.log('yes') : 'no';
  };
  const posts = items.map((item) => {
    return (
      <PostMainPage
        author={item.author}
        img={item.img}
        reactions={item.reactions}
        title={item.title}
        type={item.type}
      />
    );
  });
  return (
    <div className="main-page" ref={mainPage}>
      <CookiePrompt />
      <MasonryLayout items={posts} />
      <MyModal
        onEntered={onEntered}
        title={'Upload your pin now!'}
        isUploadPinOpen={isUploadPinOpen}
        closeModal={closeModal}
        ref={mainPage}
      >
        <UploadPinForm isAuth={true} />
      </MyModal>
    </div>
  );
}
