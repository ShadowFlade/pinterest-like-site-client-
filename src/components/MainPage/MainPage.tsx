import * as React from 'react';
import PostMainPage, { IPostMainPageProps } from '../PostMainPage/PostMainPage';

export interface IMainPageProps {
  items: IPostMainPageProps[];
}

export default function MainPage({ items }: IMainPageProps) {
  return (
    <div>
      {items.map((post) => {
        return (
          <PostMainPage
            author={post.author}
            imgSrc={post.imgSrc}
            reactions={post.reactions}
            title={post.title}
          ></PostMainPage>
        );
      })}
    </div>
  );
}
