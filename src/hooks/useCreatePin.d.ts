import * as React from 'react';
import { User } from '@/Context/context';
import { PinUploadData } from '@/components/UploadPinForm/UploadPinForm';
export interface userCreatePinOptions {
    cb: () => void;
    user: User | null;
}
export default function useCreatePin({ cb, user }: userCreatePinOptions): import("react-query").UseMutationResult<void, unknown, {
    e: React.FormEvent<Element>;
    data: PinUploadData;
}, {
    prevPins: unknown;
}>;
