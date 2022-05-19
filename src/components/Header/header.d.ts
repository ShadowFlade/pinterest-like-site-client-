import { Dispatch, SetStateAction } from 'react';

export interface IHeaderProps {
  isAuth: boolean;
  notifsCount: number;
  messagesCount: number;
  name: string;
  handleModalState: () => void;
}
