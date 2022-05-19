import { setUseProxies } from 'immer';
import * as React from 'react';
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
import imgSrc10 from './components/PostMainPage/imgs/wp3161439.jpg';

const App = () => {
  const items = [
    {
      imgSrc: imgSrc1,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc2,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc3,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc4,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc5,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc6,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc7,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc8,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc1,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc2,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc3,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc4,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc5,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc6,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc7,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
    {
      imgSrc: imgSrc8,
      title: 'Title',
      author: 'Vladimir',
      reactions: {
        emoji: 'some emoji',
        emojiCount: 5,
        likesCount: 200,
      },
    },
  ];
  return (
    <>
      <Header isAuth={false} notifsCount={5} messagesCount={10}></Header>
      <CookiePrompt />
      <MainPage items={items}></MainPage>
    </>
  );
};

export default App;
