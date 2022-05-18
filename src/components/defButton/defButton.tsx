import * as React from 'react';
import './defButton.scss';
export interface IDefButtonProps {
  children: string;
}

export default function DefButton({ children }: IDefButtonProps) {
  return (
    <button className=" def-button btn btn-secondary btn-sm rounded-pill text-black">
      {children}
    </button>
  );
}
