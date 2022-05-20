import * as React from 'react';
import { Post } from '../MasonryLayout/masonry-layout';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import PostMainPage from '../PostMainPage/PostMainPage';
import './MainPage.scss';
export interface IMainPageProps {
  items: Post[];
}

export default function MainPage({ items }: IMainPageProps) {
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
    <div className="main-page">
      <MasonryLayout items={posts} />
    </div>
  );
}
