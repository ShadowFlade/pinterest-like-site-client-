import { setUseProxies } from 'immer';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CookiePrompt from './components/CookiePrompt/CookiePrompts';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import imgSrc1 from './components/PostMainPage/imgs/_.jpeg';
const App = () => {
  console.log(imgSrc1);
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
