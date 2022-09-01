import { jsx } from '@emotion/react';
import * as React from 'react';
import { forwardRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import CookiePrompt from '../../components/CookiePrompt/CookiePrompts';
import MasonryLayout from '../../components/MasonryLayout/MasonryLayout';
import PostMainPage, { Pin, PinData } from '../../components/PostMainPage/PostMainPage';
import usePins from '../../hooks/usePins';
import { IMainPageProps } from './main-page';
import keys from '../../keys/index';
import './MainPage.scss';
import { CustomDispatch } from '@/types';
let options = {
	root: null,
	rootMargin: '0px',
	threshold: 1
  }

const MainPage = forwardRef(
	(
		{ isUploadPinOpen, closeModal }: IMainPageProps,
		ref: MutableRefObject<null | HTMLDivElement>
	) => {
		const [page,setPage ] = useState<number>(1);
		
		const { data :postsData, isSuccess, error,isLoading, refetch } = usePins(page);
		const [lastPin, setLastPin] = useState<HTMLDivElement | null>(null);
		console.log(postsData);
		const observer = useRef(new IntersectionObserver((entries)=>{
			console.log(entries,"ENTRIES");

			if(entries[0].isIntersecting) {
				setPage((prev)=>prev+1)};
		},options));
		console.log(page);

		useEffect(()=>{
			const currentElement = lastPin;
			const currentObserver = observer.current;
			if(currentElement){
				currentObserver.observe(currentElement);
			}
			return ()=>{
				if(currentElement){
					currentObserver.unobserve(currentElement);
				}
			}
		},[lastPin])

		if (isSuccess && postsData) {
			const posts = postsData.map((item: PinData,i:number) => {
	
				if (!item.img) {
					return;
				}
				
				return (
					<PostMainPage
						user={item.user}
						img={item.img}
						reactions={item.reactions}
						title={item.title}
						type={item.type || ''}
						_id={item._id}
						isLastElement={i===postsData.length-1}
						observer = {observer}

					/>
				);
			});
			console.log(posts,'POSTS');

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
