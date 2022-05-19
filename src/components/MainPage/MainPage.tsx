import * as React from 'react';
import { Post } from '../MasonryLayout/masonry-layout';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import Modal from '../Modal/Modal';
import UploadPinForm from '../UploadPinForm/UploadPinForm';
import './MainPage.scss';
export interface IMainPageProps {
  items: Post[];
}

export default function MainPage({ items }: IMainPageProps) {
  return (
    <div className="main-page">
      <MasonryLayout items={items} />
    </div>
  );
}
