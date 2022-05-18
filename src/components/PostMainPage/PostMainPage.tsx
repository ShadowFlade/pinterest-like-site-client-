import * as React from 'react';

export interface IPostMainPageProps {
  imgSrc: string;
  title: string;
  author: string;
  reactions: {
    emoji: string;
    emojiCount: number;
    likesCount: number;
  };
}

export default function PostMainPage({ imgSrc, title, author, reactions }: IPostMainPageProps) {
  return (
    <div className="main-post card mh-20" style={{ maxHeight: '400px' }}>
      <div className="main-post__pic card-img-top">
        <img className="main-post__pic-img img-fluid" src={imgSrc} alt="post" />
      </div>
      <div className="card-body">
        <h5 className="main-post__title card-title">{title}</h5>
        <p className="main-post__author card-text">{author} </p>
        {reactions && <div className="main-post__reactions"></div>}
      </div>
    </div>
  );
}
