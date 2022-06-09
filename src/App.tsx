import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import imgSrc10 from './components/PostMainPage/imgs/wp3161439.jpg';
import CookiePrompt from './components/CookiePrompt/CookiePrompts';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import imgSrc1 from './components/PostMainPage/imgs/_.jpeg';
import imgSrc2 from './components/PostMainPage/imgs/8Os5eDI.jpg';
import imgSrc3 from './components/PostMainPage/imgs/37MemesYouComeToExpectFromeBaumsWorldFeatures.jpeg';
import imgSrc4 from './components/PostMainPage/imgs/hotobuildmuscle.png';
import imgSrc5 from './components/PostMainPage/imgs/SQLCommanSQLCheatSheetSQLServerSQLforBeginner.jpeg';
import imgSrc6 from './components/PostMainPage/imgs/TheHistoryofWebDesign.jpeg';
import imgSrc7 from './components/PostMainPage/imgs/v8mhrscjvbegyopaxuki.png';
import imgSrc8 from './components/PostMainPage/imgs/wp3161437.jpg';
import imgSrc9 from './components/PostMainPage/imgs/wp3161438.jpg';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Layout from './layout/Layout';
import ContextProvider from './Context/Context';
import PinDetailed from './components/PinDetailed/PinDetailed';
const axiosConfig = {
	baseURL: 'http://localhost:3002/',
	withCredentials: true,
	'Access-Control-Allow-Origin': 'http://localhost:3002',
};

const App = () => {
	const [isDev, setDev] = useState(false);
	const navigate = useNavigate();
	const goBack = React.useCallback(() => {
		navigate(-1);
	}, []);
	const mainPage = useRef<null | HTMLDivElement>(null);
	const followers = 0;
	const following = 5;

	const [isUploadPinOpen, setIsUploadPinOpen] = useState(false);

	const closeModal = () => {
		setIsUploadPinOpen(false);
	};

	const handlePinState = () => {
		setIsUploadPinOpen(!isUploadPinOpen);
	};

	return (
		<ContextProvider>
			<div className="app mx-5">
				{isDev ? (
					<button onClick={goBack} className="btn btn-dark btn-lg back-button">
						Back
					</button>
				) : null}
				<Routes>
					<Route
						path="/"
						element={
							<Layout
								closeModal={closeModal}
								isUploadPinOpen={isUploadPinOpen}
								mainPage={mainPage}
								handlePinState={handlePinState}
							/>
						}
					>
						<Route
							index
							element={
								<MainPage
									ref={mainPage}
									closeModal={closeModal}
									isUploadPinOpen={isUploadPinOpen}
								/>
							}
						/>
						<Route path="profile/me" element={<ProfilePage />} />
						<Route path="pin/detailed/:id" element={<PinDetailed />} />
					</Route>
				</Routes>
			</div>
		</ContextProvider>
	);
};
export { axiosConfig };
export default App;
