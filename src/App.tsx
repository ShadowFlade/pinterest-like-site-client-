import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import imgSrc10 from './components/PostMainPage/imgs/wp3161439.jpg';
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
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
  const followers = 0;
  const following = 5;
  const instance = axios.create({
    baseURL: 'http://localhost:3002/',
  });

  const fetchPins = async () => {
    return await instance.get('/').then(({ data }) => data);
  };
  const { data, status, error } = useQuery('pins', fetchPins, { retry: false });

  // async function getMe(token: string) {
  //   const { data } = await instance.get('/', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return data;
  // },
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

  return (
    <div className="app mx-5">
      <Routes>
        <Route path="/" element={<MainPage items={items} />} />
        <Route
          path="/profile/me"
          element={<ProfilePage avatar={imgSrc8} followers={followers} following={following} />}
        />
      </Routes>
    </div>
  );
};

export default App;
