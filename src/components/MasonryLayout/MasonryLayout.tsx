import * as React from 'react';
import PostMainPage from '../PostMainPage/PostMainPage';
import PrivatePin, { IPrivatePinProps } from '../PrivatePin/PrivatePin';
import { Post } from './masonry-layout';
import './MasonryLayout.scss';
export default function MasonryLayout({ items }: { items: any[] }) {
  return (
    <div className="masonry-layout">
      {items.map((post) => {
        return <div className="masonry-layout__item shadow mx-2 my-5">{post}</div>;
      })}
    </div>
  );
}
