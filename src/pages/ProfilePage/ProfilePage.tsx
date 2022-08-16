import * as React from 'react';
import { useState, useRef, useContext, MouseEventHandler } from 'react';
import CollectionMini from '../../components/CollectionMini/CollectionMini';
import { nanoid } from 'nanoid';
import ProfileTabs, { EProfileTabs } from '../../components/ProfileTabs/ProfileTabs';
import CollectionMiniModal from '../../components/CollectionMiniModal/CollectionMiniModal';
import keys from '@/keys';
import { MyContext } from '@/Context/Context';
import { Share } from '@mui/icons-material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { reactQueryConfig } from '@/variables';
import AlertInfo from '@/components/AlertInfo/AlertInfo';
import { axiosConfig } from '@/index';
import axios, { AxiosResponse } from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { Collection } from '@/components/CollectionMini/collection-mini';
import { User } from '@/Context/ContextType';
import './ProfilePage.scss';

export default function ProfilePage() {
	const [collectionModalVisible, setCollectionModalVisible] = useState(false);
	const { isAuth, user } = useContext(MyContext);

	const _id = user?._id;
	const navigate = useNavigate();
	const location = useLocation();
	if (location.pathname === '/profile/me' && !isAuth) {
		navigate('/');
	}

	const getUser = async (
		context: QueryFunctionContext<(string | undefined)[]>
	): Promise<AxiosResponse<User | null, any> | null> => {
		const id = context.queryKey[0];
		if (id) {
			return axios.get(`${keys.serverURL}profile/${id}`, {
				...axiosConfig,
				withCredentials: false,
			});
		} else {
			return null;
		}
	};
	const { data: someData, isSuccess } = useQuery([_id], getUser, {
		...reactQueryConfig,
		enabled: !!_id,
	});
	const nonAuthUser = isSuccess ? someData?.data : undefined;
	const profileUser = user || nonAuthUser;
	const getCollections = async (): Promise<AxiosResponse<Collection[]>> => {
		return await axios.post('/collections/my', { user }, axiosConfig);
	};
	const { data } = useQuery(
		['collections', user?._id],
		getCollections,

		{ ...reactQueryConfig, enabled: !!user, refetchInterval: Infinity }
	);
	const collections = data?.data;
	const setCollection = (collection: Collection) => {
		setActiveCollection(collection);
	};
	const collectionsMini =
		collections &&
		collections.map((item) => (
			<CollectionMini
				key={nanoid()}
				imgs={[item.pins[0].img, item.pins[1].img, item.pins[2].img]}
				setActiveCollection={() => setCollection(item)}
				showCollectionModal={setCollectionModalVisible}
				title={item.title}
			/>
		));

	const tabProfileContent = (
		<div className="profile-page__collections">
			{collectionsMini &&
				collectionsMini.map((collection) => {
					return (
						<div key={nanoid()} className="profile-page__item m-2">
							{collection}
						</div>
					);
				})}
		</div>
	);
	const collectionsTabs = [
		{ title: EProfileTabs.Created, content: tabProfileContent },
		{ title: EProfileTabs.Default, content: <div>...</div> },
	];
	const avatar = '';
	const FOLLOWERS = 5;
	const FOLLOWING = 0;
	const [activeCollection, setActiveCollection] = useState<Collection | undefined>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const collMiniModalRef = useRef();

	const numberOfFOLLOWERS = FOLLOWERS > 0 ? FOLLOWERS : 'No one is FOLLOWING you yet...';
	const numberOfFOLLOWING =
		FOLLOWING > 0 ? (
			FOLLOWING
		) : (
			<span>
				<span>0</span>
				{isAuth ? (
					<a href={`${keys.frontURL}`} className="ms-2 mt-2 fs-6">
						Want to follow somebody?
					</a>
				) : null}
			</span>
		);

	const [alert, setAlert] = useState(false);
	const onClick: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
		copyToClipboard();
	};
	const copyToClipboard = () => {
		navigator.clipboard.writeText(`${keys.frontURL}/profile/${user?._id}`).then(() => {
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
									{(profileUser?.name && profileUser?.name[0]) ||
										profileUser?.email[0]}
								</div>
							) : null}
						</div>
						<h1 className="profile-page__name h1">{profileUser && profileUser.name}</h1>
						<p className="profile-page__text">
							<p className="profile-page__FOLLOWERS mt-2">
								followers: {numberOfFOLLOWERS}
							</p>
							<p>{isSuccess ? 'smth' : 'nothing'}</p>
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
					<ProfileTabs items={collectionsTabs} />
				</div>
			</div>

			<div className="profile-page__statistics"></div>
			<CollectionMiniModal
				ref={collMiniModalRef}
				closeModal={closeModal}
				show={collectionModalVisible}
				setShow={setCollectionModalVisible}
				collection={activeCollection}
			></CollectionMiniModal>
			<AlertInfo text="Link to your profile was copied to clipboard" visible={alert} />
		</div>
	);
}
