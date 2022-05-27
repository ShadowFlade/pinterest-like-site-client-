import { instance } from '../App';
import * as React from 'react';
import { useMutation, QueryCache, useQueryClient } from 'react-query';
import PostMainPage, { IPostMainPageProps } from '../components/PostMainPage/PostMainPage';
import { nanoid } from 'nanoid';
import { ReadPreferenceMode } from 'mongodb';
import { useState } from 'react';

export default function useCreatePin(cb: () => void) {
  const queryClient = useQueryClient();
  return useMutation(uploadPin, {
    onMutate: async (e) => {
      const newPinData: { [key: string]: any } = {};
      Array.from(new FormData(e.target as HTMLFormElement).entries()).map(([key, value]) => {
        newPinData[key] = value;
      });
      const prevPins = queryClient.getQueryData('pins');

      const fileReader = new FileReader();
      fileReader.onloadend = async () => {
        if (
          fileReader.result &&
          typeof fileReader.result === 'string' &&
          fileReader.readyState == 2
        ) {
          console.log(fileReader.result, 'RESULT');
          const newPin = {
            _id: nanoid(),
            title: String(newPinData.title),
            img: fileReader.result,
          };

          await queryClient.cancelQueries('pins');
          // const prevPins = queryClient.getQueryData('pins');
          queryClient.setQueryData('pins', (old: string[]) => {
            console.log(old);
            const newData = [...old, newPin];
            console.log(
              '🚀 ~ file: useCreatePin.tsx ~ line 15 ~ queryClient.setQueryData ~ newData',
              newData
            );
            return newData;
          });
          cb();
        }
      };
      fileReader.readAsDataURL(newPinData.file);

      console.log('🚀 ~ file: useCreatePin.tsx ~ line 12 ~ onMutate: ~ newPinData', newPinData);
      console.log('🚀', fileReader);

      return {
        prevPins,
      };
    },
    onError: (err, newPin, context: { prevPins: string[] }) => {
      queryClient.setQueryData('pins', context.prevPins);
    },
    onSettled: () => {
      console.log('invalidated');
      queryClient.invalidateQueries('todos');
      //cb here
    },
  });
}

async function uploadPin(e: React.FormEvent): Promise<void> {
  const newData = new FormData(e.target as HTMLFormElement);
  return await instance.post('/pinupload', newData, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3002',
    },
  });
}
