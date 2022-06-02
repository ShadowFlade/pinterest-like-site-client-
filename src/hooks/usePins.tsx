import { axiosConfig } from '../App';
import { Pin } from '../components/PostMainPage/PostMainPage';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const usePins = () => {
  const fetchPins = async () => {
    return await axios.get('/', axiosConfig).then(({ data }) => data.pinterest as Pin[]);
  };
  return useQuery('pins', fetchPins, { retry: false });
};
export default usePins;
