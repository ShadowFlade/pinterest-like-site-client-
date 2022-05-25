import * as React from 'react';
import { nanoid } from 'nanoid';
import ContentLoader from 'react-content-loader';
import './loading.scss';
export default function Loading() {
  const numberOfLoadingItems = 4;

  return (
    <div className="loading">
      {Array(numberOfLoadingItems)
        .fill(0)
        .map((item) => {
          return (
            <div className="loading__item" key={nanoid()}>
              <ContentLoader height={500} viewBox="0 0 400px 500px">
                <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
                <rect x="0" y="325" rx="4" ry="4" width="100" height="25" />
                <rect x="0" y="375" rx="3" ry="3" width="250" height="25" />
                <rect x="0" y="425" rx="3" ry="3" width="200" height="25" />
              </ContentLoader>
            </div>
          );
        })}
    </div>
  );
}
