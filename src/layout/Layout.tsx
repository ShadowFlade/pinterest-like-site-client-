import Header from '../components/Header/Header';
import * as React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyModal from '../components/Modal/Modal';
import UploadPinForm from '../components/UploadPinForm/UploadPinForm';

export interface ILayoutProps {
  handlePinState: () => void;
  isUploadPinOpen: boolean;
  closeModal: () => void;
  mainPage: React.MutableRefObject<null | HTMLDivElement>;
}

export default function Layout({
  handlePinState,
  isUploadPinOpen,
  closeModal,
  mainPage,
}: ILayoutProps) {
  return (
    <div>
      <Header
        isAuth={false}
        notifsCount={5}
        messagesCount={10}
        name={'Sergay'}
        handleModalState={handlePinState}
      ></Header>
      <Outlet />
      <MyModal
        title={'Upload your pin now!'}
        isUploadPinOpen={isUploadPinOpen}
        closeModal={closeModal}
        ref={mainPage}
      >
        <UploadPinForm closeModal={closeModal} isAuth={true} />
      </MyModal>
    </div>
  );
}
