import { instance } from '../App';
import { IPostMainPageProps } from '../components/PostMainPage/PostMainPage';
import { useState } from 'react';
import { useQuery } from 'react-query';

const usePins = () => {
  const fetchPins = async () => {
    return await instance.get('/').then(({ data }) => data.pinterest);
  };
  return useQuery('pins', fetchPins, { retry: false });
};
export default usePins;
