import { Dispatch, SetStateAction } from 'react';
import './PinDetailed.scss';
export interface Spinner {
    action?: Dispatch<SetStateAction<boolean>>;
    element: JSX.Element;
}
export default function PinDetailed(): JSX.Element;
