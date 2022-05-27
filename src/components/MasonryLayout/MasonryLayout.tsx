import { nanoid } from 'nanoid';
import * as React from 'react';
import './MasonryLayout.scss';
export default function MasonryLayout({ items }: { items: any[] }) {
  return (
    <div className="masonry-layout">
      {items.map((post) => {
        return (
          <div className="masonry-layout__item shadow mx-2 my-5" key={nanoid()}>
            {post}
          </div>
        );
      })}
    </div>
  );
}
