import * as React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './404.scss';
import errorImg from './404.png';
import keys from '@/keys';
export interface IErrorPageProps {
	prevPath: string;
}

export default function ErrorPage({ prevPath }: IErrorPageProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className="error-page d-flex">
			<div className="error-page__pic">
				<img
					src={errorImg}
					alt="naked man with pixeled-out nudities"
					className="error-page_img"
				/>
			</div>
			<div className="error-page__text ms-5 display-5">
				<h2 className="h1">Um, yeah. This is really awkward.</h2>
				<p>
					We tried really hard, but could'nt find the page you were looking for. You may
					find what you were looking for on our{' '}
					<Link className=" error-page__link" to={`${keys.frontURL}`}>
						homepage.
					</Link>{' '}
					Or you can just{' '}
					<span onClick={goBack} className=" error-page__link">
						go back.
					</span>{' '}
				</p>
			</div>
		</div>
	);
}
