import * as React from 'react';
import { forwardRef, MutableRefObject } from 'react';
import CookiePrompt from '../CookiePrompt/CookiePrompts';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import PostMainPage from '../PostMainPage/PostMainPage';
import usePins from '../../hooks/usePins';
import { IMainPageProps } from './main-page';
import './MainPage.scss';

const MainPage = forwardRef(
  (
    { isUploadPinOpen, closeModal }: IMainPageProps,
    ref: MutableRefObject<null | HTMLDivElement>
  ) => {
    const { data, status, error } = usePins();

    if (status === 'success') {
      const posts = data.map((item: any) => {
        // if (!item.img) {
        //   return;
        // } //TODO change back
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
