import * as React from 'react';
import { Dispatch } from 'react';
import './Like.scss';
export interface ILikeProps {
    color: string;
    liked: boolean;
    setIsLiked: Dispatch<React.SetStateAction<boolean>>;
}
declare const Like: React.ForwardRefExoticComponent<ILikeProps & React.RefAttributes<HTMLInputElement>>;
export default Like;
