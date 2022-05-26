import * as React from 'react';
import { useState, useRef, forwardRef, MutableRefObject } from 'react';
import CookiePrompt from '../CookiePrompt/CookiePrompts';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import { Post } from '../MasonryLayout/masonry-layout';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import MyModal from '../Modal/Modal';
import PostMainPage, { IPostMainPageProps } from '../PostMainPage/PostMainPage';
import UploadPinForm from '../UploadPinForm/UploadPinForm';
import { instance } from '@/App';
import './MainPage.scss';
import { useQuery } from 'react-query';
import usePins from '../../hooks/usePins';
export interface IMainPageProps {
  isUploadPinOpen: boolean;
  closeModal: () => void;
}

const MainPage = forwardRef(
  (
    { isUploadPinOpen, closeModal }: IMainPageProps,
    ref: MutableRefObject<null | HTMLDivElement>
  ) => {
    const { data, status, error } = usePins();

    const pins: { pinterest: IPostMainPageProps[] } = data;
    if (status === 'success') {
      console.log(data);

      const posts = data.pinterest?.map((item: any) => {
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
        <div className="main-page" ref={ref}>
          <CookiePrompt />
          {posts && posts.length > 1 ? (
            <MasonryLayout items={posts} />
          ) : (
            <h1>Your pins could be here!</h1>
          )}
        </div>
      );
    } else {
      return <div ref={ref}></div>;
    }
  }
);
export default MainPage;
