import * as React from 'react';
import CollectionMini from '../../components/CollectionMini/CollectionMini';
import img1 from '../../components/PostMainPage/imgs/_.jpeg';
import img2 from '../../components/PostMainPage/imgs/8Os5eDI.jpg';
import img3 from '../../components/PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc4 from '../../components/PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc5 from '../../components/PostMainPage/imgs/SQLCommanSQLCheatSheetSQLServerSQLforBeginner.jpeg';
import imgSrc6 from '../../components/PostMainPage/imgs/TheHistoryofWebDesign.jpeg';
import imgSrc7 from '../../components/PostMainPage/imgs/v8mhrscjvbegyopaxuki.png';
import imgSrc8 from '../../components/PostMainPage/imgs/wp3161437.jpg';
import imgSrc9 from '../../components/PostMainPage/imgs/wp3161438.jpg';
import ProfileTabs, { EProfileTabs } from '../../components/ProfileTabs/ProfileTabs';
import CollectionMiniModal from '../../components/CollectionMiniModal/CollectionMiniModal';
import { useState, useRef, useContext } from 'react';
import { IProfilePageProps } from './profile-page';
import './ProfilePage.scss';
import { MyContext } from '@/Context/Context';
import { User } from '@/Context/context';

export default function ProfilePage() {
	const { isAuth, user } = useContext(MyContext);
	const { _id, name } = user as User; //user cant visit this page without being authorized
	const avatar = '';
	const FOLLOWERS = 5;
	const FOLLOWING = 10;
	const [activeCollection, setActiveCollection] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const collMiniModalRef = useRef();
	const collections = [
		[img1, img2, img3],
		[imgSrc4, imgSrc5, imgSrc6],
		[imgSrc7, imgSrc8, imgSrc9],
	];
	const collectionsMini = collections.map((item) => (
		<CollectionMini imgs={[item[0], item[1], item[2]]} />
	));
	const numberOfFOLLOWERS = FOLLOWERS > 0 ? FOLLOWERS : 'No one is FOLLOWING you yet...';
	const numberOfFOLLOWING =
		FOLLOWING > 0 ? FOLLOWING : '0(${<a href="/">Want to follow somebody?</a>})';
	const tabProfileContent = (
		<div className="profile-page__collections">
			{collectionsMini.map((collection) => {
				return <div className="profile-page__item">{collection}</div>;
			})}
		</div>
	);
	const tabsAndTabsContent = [
		{ title: EProfileTabs.Created, content: tabProfileContent },
		{ title: EProfileTabs.Default, content: <div>...</div> },
	];
	return (
		<div className="profile-page">
			<div className="profile-page__content">
				<header className="profile-page__header">
					<div className="profile-page__avatar">
						<div className="profile-page__pic">
							<img src={avatar} alt="avatar" />
						</div>
						<h1 className="profile-page__name h1">{user && name}</h1>
						<p className="profile-page__text">
							<p className="profile-page__FOLLOWERS">{numberOfFOLLOWERS}</p>
							<p className="profile-page__FOLLOWING">
								FOLLOWING: {numberOfFOLLOWING}
							</p>
						</p>
					</div>
				</header>
				<div className="profile-page__collections">
					<ProfileTabs items={tabsAndTabsContent} />
				</div>
			</div>

			<div className="profile-page__statistics"></div>
			<CollectionMiniModal
				ref={collMiniModalRef}
				closeModal={closeModal}
			></CollectionMiniModal>
		</div>
	);
}