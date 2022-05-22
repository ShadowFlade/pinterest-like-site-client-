import Header from '../components/Header/Header';
import * as React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export interface IAppProps {
  handlePinState: () => void;
}

export default function Layout({ handlePinState }: IAppProps) {
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
    </div>
  );
}
