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
const lastItemMargin = 10; //percentage
const  options = {
	root: null,
	rootMargin: '0px',
	threshold: [0,1-(lastItemMargin/100)]
  }
   

const MainPage = forwardRef(
	(
		{ isUploadPinOpen, closeModal }: IMainPageProps,
		ref: MutableRefObject<null | HTMLDivElement>
	) => {
		const [page,setPage ] = useState<number>(1);
		const [visible,setVisible] = useState(false);
		const lastPin = useRef<null | HTMLDivElement>(null);
		const { data :postsData, isSuccess, error,isLoading, refetch } = usePins(page);
		const observer = useRef(new IntersectionObserver((entries)=>{
			if(entries[0].isIntersecting) {
				setVisible(true);
				setPage((prev)=>prev+1);
				refetch();
			
		
			}
			else {
				setVisible(false);
			}

		},options));

		useEffect(()=>{
			const currentElement = lastPin;
			const currentObserver = observer.current;
			if(currentElement){
				currentElement.current && currentObserver.observe(currentElement.current);
			}
			return ()=>{
				if(currentElement){
					currentElement.current &&  currentObserver.unobserve(currentElement.current);
				}
			}
		},[lastPin.current])

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
						ref={i===postsData.length-1 ? lastPin : null}

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
