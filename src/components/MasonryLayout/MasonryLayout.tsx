import { nanoid } from 'nanoid';
import * as React from 'react';
import './MasonryLayout.scss';
export default function MasonryLayout({ items }: { items: any[] }) {
  return (
    <div className="masonry-layout">
      {items.map((post) => {
        return (
          <div className="masonry-layout__item shadow" key={nanoid()}>
            {post}
          </div>
        );
      })}
    </div>
  );
}
