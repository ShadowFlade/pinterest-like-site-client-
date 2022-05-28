import { instance } from '../App';
import * as React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { nanoid } from 'nanoid';

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
          const newPin = {
            _id: nanoid(),
            title: String(newPinData.title),
            img: fileReader.result,
          };

          await queryClient.cancelQueries('pins');
          queryClient.setQueryData('pins', (old: string[]) => {
            const newData = [...old, newPin];
            return newData;
          });
        }
      };
      fileReader.readAsDataURL(newPinData.file);

      return {
        prevPins,
      };
    },
    onError: (err, newPin, context: { prevPins: string[] }) => {
      queryClient.setQueryData('pins', context.prevPins);
    },
    onSettled: () => {
      queryClient.invalidateQueries('todos');
      cb();
    },
  });
}

async function uploadPin(e: React.FormEvent): Promise<void> {
  //here
  const newData = new FormData(e.target as HTMLFormElement);
  return await instance.post('/pinupload', newData, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3002',
    },
  });
}
