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
import { useState, useRef, useContext, MouseEventHandler } from 'react';
import { MyContext } from '@/Context/Context';
import { nanoid } from 'nanoid';
import { Share, SubdirectoryArrowLeftRounded } from '@mui/icons-material';
import './ProfilePage.scss';
import { Link } from 'react-router-dom';
import { BASE_URL } from '@/variables';
import AlertInfo from '@/components/AlertInfo/AlertInfo';

export default function ProfilePage() {
	const { isAuth, user } = useContext(MyContext);
	const avatar = '';
	const FOLLOWERS = 5;
	const FOLLOWING = 0;
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
		<CollectionMini key={nanoid()} imgs={[item[0], item[1], item[2]]} />
	));
	const numberOfFOLLOWERS = FOLLOWERS > 0 ? FOLLOWERS : 'No one is FOLLOWING you yet...';
	const numberOfFOLLOWING =
		FOLLOWING > 0 ? (
			FOLLOWING
		) : (
			<span>
				<span>0</span>
				<a href="/" className="ms-2 mt-2 fs-6">
					Want to follow somebody?
				</a>
			</span>
		);
	const tabProfileContent = (
		<div className="profile-page__collections">
			{collectionsMini.map((collection) => {
				return (
					<div key={nanoid()} className="profile-page__item m-2">
						{collection}
					</div>
				);
			})}
		</div>
	);
	const tabsAndTabsContent = [
		{ title: EProfileTabs.Created, content: tabProfileContent },
		{ title: EProfileTabs.Default, content: <div>...</div> },
	];
	const [alert, setAlert] = useState(false);
	const onClick: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
		copyToClipboard();
	};
	const copyToClipboard = () => {
		navigator.clipboard.writeText(`${BASE_URL}/profile/${user?._id}`).then(() => {
			setAlert(true);
			setTimeout(() => setAlert(false), 5000);
		});
	};
	return (
		<div className="profile-page">
			<div className="profile-page__content">
				<header className="profile-page__header">
					<div className="profile-page__avatar">
						<div className="profile-page__pic">
							<img className="profile-page__img" src={avatar} alt="avatar" />
							{!avatar ? (
								<div className="profile-page__extra">
									{(user?.name && user?.name[0]) || user?.email[0]}
								</div>
							) : null}
						</div>
						<h1 className="profile-page__name h1">{user && user.name}</h1>
						<p className="profile-page__text">
							<p className="profile-page__FOLLOWERS mt-2">
								followers: {numberOfFOLLOWERS}
							</p>
							<p className="profile-page__FOLLOWING mt-2">
								following: {numberOfFOLLOWING}
							</p>
							<span className="mt-2">
								<button
									className="bg-transparent mt-2 mx-auto d-flex justify-content-center align-items-center"
									onClick={onClick}
								>
									<Share />
									<span className="share lead ms-1">Share your profile</span>
								</button>
							</span>
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
			<AlertInfo text="Link to your profile was copied to clipboard" visible={alert} />
		</div>
	);
}
