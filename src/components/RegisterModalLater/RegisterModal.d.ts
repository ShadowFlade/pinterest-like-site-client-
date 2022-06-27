import * as React from 'react';
import './RegisterModal.scss';
export interface RegisterCubeForm {
    ref: React.MutableRefObject<null | HTMLDivElement>;
}
export declare type ICubeFace = {
    type?: string;
    step: number;
    placeholder: string;
    inputType: string;
    body: string;
};
export default function RegisterCubeForm({ ref }: RegisterCubeForm): JSX.Element;
