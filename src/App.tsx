import * as React from 'react';
import imgSrc10 from './components/PostMainPage/imgs/wp3161439.jpg';
import * as ReactDOM from 'react-dom/client';
import CookiePrompt from './components/CookiePrompt/CookiePrompts';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import imgSrc1 from './components/PostMainPage/imgs/_.jpeg';
import imgSrc2 from './components/PostMainPage/imgs/8Os5eDI.jpg';
import imgSrc3 from './components/PostMainPage/imgs/37MemesYouComeToExpectFromeBaumsWorldFeatures.jpeg';
import imgSrc4 from './components/PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc5 from './components/PostMainPage/imgs/SQLCommanSQLCheatSheetSQLServerSQLforBeginner.jpeg';
import imgSrc6 from './components/PostMainPage/imgs/TheHistoryofWebDesign.jpeg';
import imgSrc7 from './components/PostMainPage/imgs/v8mhrscjvbegyopaxuki.png';
import imgSrc8 from './components/PostMainPage/imgs/wp3161437.jpg';
import imgSrc9 from './components/PostMainPage/imgs/wp3161438.jpg';
import { useState } from 'react';
import UploadPinForm from './components/UploadPinForm/UploadPinForm';
import { Button, Modal } from 'react-bootstrap';
import MyModal from './components/Modal/Modal';

const App = () => {
  const items = [
    {
      img: imgSrc1,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc2,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc3,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc4,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc5,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc6,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc7,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc8,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc1,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc2,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc3,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc4,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc5,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc6,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc7,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      img: imgSrc8,
      type: 'PostMainPage',
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
  ];
  const [isUploadPinOpen, setIsUploadPinOpen] = useState(false);

  const closeModal = () => {
    setIsUploadPinOpen(false);
  };
  const handlePinState = () => {
    setIsUploadPinOpen(!isUploadPinOpen);
  };
  return (
    <>
      <Header
        isAuth={false}
        notifsCount={5}
        messagesCount={10}
        name={'Sergay'}
        handleModalState={handlePinState}
      ></Header>
      <CookiePrompt />
      <MainPage items={items}></MainPage>

      <MyModal isUploadPinOpen={isUploadPinOpen} closeModal={closeModal}>
        <UploadPinForm isAuth={true} />
      </MyModal>
    </>
  );
};

export default App;
