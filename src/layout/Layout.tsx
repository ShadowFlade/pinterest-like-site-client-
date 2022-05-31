import Header from '../components/Header/Header';
import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyModal from '../components/Modal/Modal';
import UploadPinForm from '../components/UploadPinForm/UploadPinForm';
import RegisterLoginModal from '../components/RegisterLoginModal/RegisterLoginModal';

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
  const [isLeft, setIsLeft] = useState(true);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleLoginModal = () => {
    handleRegisterLoginModal();
    setIsLeft(true);
  };
  const handleRegisterModal = () => {
    handleRegisterLoginModal();
    setIsLeft(false);
  };
  const handleRegisterLoginModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };
  return (
    <div>
      <Header
        isAuth={false}
        notifsCount={5}
        messagesCount={10}
        name={'Sergay'}
        handleModalState={handlePinState}
        handleRegisterLoginModal={handleRegisterLoginModal}
        setIsLeft={setIsLeft}
        handleLoginModal={handleLoginModal}
        handleRegisterModal={handleRegisterModal}
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
      <RegisterLoginModal
        left={isLeft}
        isRegisterModalOpen={isRegisterModalOpen}
        closeRegisterModal={closeRegisterModal}
        setIsLeft={setIsLeft}
      />
    </div>
  );
}
