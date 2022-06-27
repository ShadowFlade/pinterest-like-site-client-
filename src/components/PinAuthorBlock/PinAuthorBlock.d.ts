/// <reference types="react" />
import './PinAuthorBlock.scss';
export interface IPinAuthorBlockProps {
    authorName: string;
    avatar: string;
    authorID: string;
}
export default function PinAuthorBlock({ authorName, avatar, authorID }: IPinAuthorBlockProps): JSX.Element;
