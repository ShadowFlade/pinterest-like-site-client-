/// <reference types="react" />
import './404.scss';
export interface IErrorPageProps {
    prevPath: string;
}
export default function ErrorPage({ prevPath }: IErrorPageProps): JSX.Element;
