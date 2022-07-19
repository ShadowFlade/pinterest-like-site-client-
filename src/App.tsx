import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Layout from './layout/Layout';
import { MyContext } from './Context/Context';
import PinDetailed from './components/PinDetailed/PinDetailed';
import ErrorPage from './pages/404/404';
import usePrevPath from './hooks/usePrevPath';
import keys from './keys';

const App = () => {
	const [isDev, setDev] = useState(false);
	const [isAddPinPopupVisible, setAddPinPopupVisible] = useState(false);
	const [isUploadPinOpen, setIsUploadPinOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const prevPath = usePrevPath(location.pathname);

	const goBack = React.useCallback(() => {
		navigate(-1);
	}, []);
	const { isAuth, user } = useContext(MyContext);
	const mainPage = useRef<null | HTMLDivElement>(null);

	const closeModal = () => {
		setIsUploadPinOpen(false);
	};
	const handlePinPopupShow = () => {
		setAddPinPopupVisible(!isAddPinPopupVisible);
	};
	const handlePinState = () => {
		if (user) {
			setIsUploadPinOpen(!isUploadPinOpen);
		} else {
			handlePinPopupShow();
		}
	};

	return (
		<div className="app mx-5">
			<button onClick={goBack} className="btn btn-dark btn-lg back-button">
				Back
			</button>
			<Routes>
				<Route
					path={`${keys.frontURL}`}
					element={
						<Layout
							isAddPinPopupVisible={isAddPinPopupVisible}
							handlePinPopupVisible={handlePinPopupShow}
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

					<Route path={`${keys.frontURL}/profile/me`} element={<ProfilePage />} />
					<Route path={`${keys.frontURL}/profile/:id`} element={<ProfilePage />} />
					<Route path={`${keys.frontURL}/pin/detailed/:id`} element={<PinDetailed />} />
					<Route path="*" element={<ErrorPage prevPath={prevPath} />} />
				</Route>
			</Routes>
		</div>
	);
};
export default App;
