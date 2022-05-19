import * as React from 'react';
import PostMainPage, { IPostMainPageProps } from '../PostMainPage/PostMainPage';
import './MainPage.scss';
export interface IMainPageProps {
  items: IPostMainPageProps[];
}

export default function MainPage({ items }: IMainPageProps) {
  return (
    <div className="main-page">
      {items.map((post) => {
        return (
          <div className="main-page__item shadow mx-2 my-5">
            {' '}
            <PostMainPage
              author={post.author}
              imgSrc={post.imgSrc}
              reactions={post.reactions}
              title={post.title}
            ></PostMainPage>
          </div>
        );
      })}
      {/* <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>

      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>

      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div>
      <div style={{ backgroundColor: 'red', width: '150px', height: '150px' }}></div> */}
    </div>
  );
}
