import * as React from 'react';

export interface IPostMainPageProps {
  imgSrc: string;
  title: string;
  author: string;
}

export default function PostMainPage({ imgSrc, title, author }: IPostMainPageProps) {
  return (
    <div className="main-post">
      <div className="main-post__pic">
        <img className="main-post__pic-img" src={imgSrc} alt="post pic" />
      </div>
      <div className="main-post__title">{title}</div>
      <div className="main-post__author">{author} </div>
    </div>
  );
}
