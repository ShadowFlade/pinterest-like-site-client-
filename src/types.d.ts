import { Dispatch, SetStateAction } from 'react';

export type CustomDispatch<T> = Dispatch<SetStateAction<T>>;
