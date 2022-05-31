import { Dispatch, SetStateAction } from 'react';

export interface RegisterLoginModal {
  isRegisterModalOpen: boolean;
  left: boolean;
  setIsLeft: Dispatch<SetStateAction<boolean>>;
  closeRegisterModal: () => void;
}
