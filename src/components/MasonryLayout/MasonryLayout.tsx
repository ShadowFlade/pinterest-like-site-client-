import * as React from 'react';
import PostMainPage from '../PostMainPage/PostMainPage';
import PrivatePin, { IPrivatePinProps } from '../PrivatePin/PrivatePin';
import { Post } from './masonry-layout';
export default function MasonryLayout({ items }: { items: Post[] }) {
  return (
    <div className="masonry-layout">
      {items.map((post) => {
        return (
          <div className="masonry-layout__item shadow mx-2 my-5">
            {post.type === 'PostMainPage' ? (
              <PostMainPage
                author={post.author}
                img={post.img}
                reactions={post.reactions}
                title={post.title}
                type={post.type}
              ></PostMainPage>
            ) : (
              <PrivatePin type={post.type} img={post.img} title={post.title} />
            )}
          </div>
        );
      })}
    </div>
  );
}
