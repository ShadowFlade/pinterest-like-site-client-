import * as React from 'react';

export interface IPostMainPageProps {
  img: string;
  title: string;
  author: string;
  type: string;
  reactions: {
    emoji: string;
    emojiCount: number;
    likesCount: number;
  };
}

export default function PostMainPage({ img, title, author, reactions }: IPostMainPageProps) {
  return (
    <div className="main-post card">
      <div className="main-post__pic ">
        <img
          className="main-post__pic-img card-img-top img-fluid"
          loading="lazy"
          src={img}
          alt="post"
        />
      </div>
      <div className="card-body">
        <h5 className="main-post__title card-title">{title}</h5>
        <p className="main-post__author card-text">{author} </p>
        {reactions && <div className="main-post__reactions"></div>}
      </div>
    </div>
  );
}
