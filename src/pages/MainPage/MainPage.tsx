import queryClient from '@/index';
import * as React from 'react';
import { forwardRef, MutableRefObject } from 'react';
import CookiePrompt from '../../components/CookiePrompt/CookiePrompts';
import MasonryLayout from '../../components/MasonryLayout/MasonryLayout';
import PostMainPage, { Pin } from '../../components/PostMainPage/PostMainPage';
import usePins from '../../hooks/usePins';
import { IMainPageProps } from './main-page';
import './MainPage.scss';
const MainPage = forwardRef(
	(
		{ isUploadPinOpen, closeModal }: IMainPageProps,
		ref: MutableRefObject<null | HTMLDivElement>
	) => {
		const { data, isSuccess, error } = usePins();

		const postsData = data;
		if (isSuccess && postsData) {
			const posts = postsData.map((item: Pin) => {
				if (!item.img) {
					return;
				}
				return (
					<PostMainPage
						author={item.author}
						img={item.img}
						reactions={item.reactions}
						title={item.title}
						type={item.type || ''}
						_id={item._id}
					/>
				);
			});

			return (
				<div className="main-page px-2" ref={ref}>
					<CookiePrompt />
					{posts && posts.length > 0 ? (
						<MasonryLayout items={posts} />
					) : (
						<h1>Your pins could be here!</h1>
					)}
				</div>
			);
		} else {
			return <div ref={ref}></div>;
		}
	}
);
export default MainPage;
