/// <reference types="react" />
import './PostMainPage.scss';
export interface Pin {
    img: string;
    title: string;
    user: string | undefined;
    type?: string;
    readonly _id: string;
    keywords?: string[];
    collections?: string[];
    reactions?: {
        emoji: string;
        emojiCount: number;
        likesCount: number;
    };
    description?: string;
}
export interface PinData {
    img: string;
    title: string;
    user: {
        _id: string;
        email: string;
        name?: string;
    };
    type?: string;
    readonly _id: string;
    keywords?: string[];
    collections?: string[];
    reactions?: {
        emoji: string;
        emojiCount: number;
        likesCount: number;
    };
    description?: string;
}
export default function PostMainPage({ img, title, user, reactions, _id }: Pin): JSX.Element | null;
