import * as React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { User } from '@/Context/context';
import { Pin } from '@/components/PostMainPage/PostMainPage';
import { PinUploadData } from '@/components/UploadPinForm/UploadPinForm';
import { axiosConfig } from '..';
export interface userCreatePinOptions {
	cb: () => void;
	user: User | null;
}
//TODO dont like passing data arguments into userCreatePin arguments
export default function useCreatePin({ cb, user }: userCreatePinOptions) {
	const queryClient = useQueryClient();
	return useMutation(uploadPin, {
		onMutate: async ({ e, data }) => {
			const newPinData: { [key: string]: any; user: User | undefined } = { user: undefined };
			Array.from(new FormData(e.target as HTMLFormElement).entries()).map(([key, value]) => {
				newPinData[key] = value;
			});
			const prevPins = queryClient.getQueryData('pins');

			const fileReader = new FileReader();
			fileReader.onloadend = async () => {
				if (
					fileReader.result &&
					typeof fileReader.result === 'string' &&
					fileReader.readyState == 2 //TODO mb need to clean (2 lines above and this one)
				) {
					const newPin: Pin = {
						_id: nanoid(),
						title: String(newPinData.title),
						img: fileReader.result,
						author: user?.name || user?.email || undefined,
					};

					await queryClient.cancelQueries('pins');
					queryClient.setQueryData('pins', (old: string[]) => {
						const newData = [...old, newPin];
						return newData;
					});
				}
			};
			fileReader.readAsDataURL(newPinData.file);
			cb();
			return {
				prevPins,
			};
		},
		onError: (err, newPin, context: { prevPins: string[] }) => {
			queryClient.setQueryData('pins', context.prevPins);
		},
		onSettled: () => {
			queryClient.invalidateQueries('pins');
		},
	});
}

async function uploadPin({ e, data }: { e: React.FormEvent; data: PinUploadData }): Promise<void> {
	const newData = new FormData(e.target as HTMLFormElement);
	newData.append('authorId', data.authorId);
	return await axios.post('/pinupload', newData, axiosConfig);
}
