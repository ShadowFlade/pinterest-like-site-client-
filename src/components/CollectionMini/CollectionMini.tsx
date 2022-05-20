import * as React from 'react';
import { ICollectionMiniProps } from './collection-mini';
import './CollectionMini.scss';

export default function CollectionMini({ imgs }: ICollectionMiniProps) {
  return (
    <div className="collection-mini">
      <div className="collection-mini__inner">
        <div className="collection-mini__big-pic">
          <img src={imgs[0]} alt="" />
        </div>
        <div className="collection-mini__small-pics">
          <img className="collection-mini__small-pic" src={imgs[1]} alt="" />
          <img className="collection-mini__small-pic" src={imgs[2]} alt="" />
        </div>
      </div>
    </div>
  );
}
