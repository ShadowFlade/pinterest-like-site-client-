import * as React from 'react';
import { useContext, useRef, useState } from 'react';
import SecondaryIcon from '../SecondaryIcon/SecondaryIcon';
import { IHeaderProps } from './HeaderType';
import ChatIcon from '../SecondaryIcon/chat-dots.svg';
import BellIcon from '../SecondaryIcon/bell-fill.svg';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { MyContext } from '@/Context/Context';
import { bindOutsideClickDetection } from '@/utils/utils';
import PopItem from '../PopItem/PopItem';
import ContextMenu from '../ContextMenu/ContextMenu';
import keys from '@/keys';
import ModalTransparentSmall from '../ModalTransparentSmall/ModalTransparentSmall';
import Burger from '../Burger/Burger';
import { Logout } from '@mui/icons-material';
import axios from 'axios';
import { axiosConfig } from '@/index';
import DropdownMenuOption from '../DropdownMenuOption/DropdownMenuOptoin';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export default function Header({
	messagesCount,
	notifsCount,
	name,
	handleModalState,
	handleLoginModal,
	handleRegisterModal,
	handlePinPopupVisible,
	isAddPinPopupVisible,
}: IHeaderProps) {
	const [burgerVisible, setBurgerVisible] = useState(false);
	const navigate = useNavigate();
	const iconWidth = 35;
	const addPinButton = useRef<HTMLButtonElement | null>(null);
	const { isAuth, user } = useContext(MyContext);
	const profileLink = useRef(null);
	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const { refetch } = useContext(MyContext);
	const auth = isAuth ? (
		<Link
			to={`profile/me`}
			className="header__profile-icon mx-2"
			ref={profileLink}
			onContextMenu={(e) => {
				e.preventDefault();
				setIsContextMenuVisible((c) => !c);
			}}
		>
			<ProfileIcon name={user?.name || user?.email || ''} />
		</Link>
	) : (
		<div className="header__auth">
			<button data-cy='login-button' onClick={handleLoginModal} className="btn btn-primary mx-1">
				Login
			</button>
			<button data-cy='register-button' onClick={handleRegisterModal} className="btn btn-secondary mx-1">
				Register
			</button>
		</div>
	);
	const toggleBurgerMenu = (option: boolean) => {
		if (option && typeof option === 'boolean') {
			setBurgerVisible(option);
		} else {
			setBurgerVisible(!burgerVisible);
		}
	};
	const logout = () => {
		axios.get('auth/logout', axiosConfig).then(({ data }) => {
			if (data.success) {
				toggleBurgerMenu(false);
				refetch ? refetch() : false;
			}
		});
	};

	const logoutItem = (
		<DropdownMenuOption action={logout} icon={<Logout />} modif="logout" text="Logout" />
	);
	const goToProfilePage = () => {
		navigate('/profile/me');
	};
	const items = [
		isAuth ? (
			logoutItem
		) : (
			<DropdownMenuOption action={handleLoginModal} modif="login" text="Login" />
		),
		isAuth ? null : <DropdownMenuOption text="Register" action={handleRegisterModal} />,
		isAuth ? <DropdownMenuOption action={goToProfilePage} text="Your profile" /> : null,
		isAuth ? <p  onClick={() => handleModalState()}>Add pin</p> : null 
	];

	return (
		<div className="navbar navbar-expand-lg">
			<Link to={keys.frontURL} className="mx-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={iconWidth}
					height={iconWidth}
					fill="currentColor"
					className="bi bi-pinterest text-danger"
					viewBox="0 0 16 16"
				>
					<path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
				</svg>
			</Link>
			<button className="btn btn-dark text-white rounded-pill mx-2 header__home-button">
				My pins
			</button>
			<button
				data-cy='add-pin-button'
				onClick={() => handleModalState()}
				ref={addPinButton}
				className="btn btn-dark text white rounded-pill mx-2 header__home-button add-pin-button"
			>
				Add pin
			</button>
			{addPinButton.current ? (
				<ModalTransparentSmall
					isVisible={isAddPinPopupVisible}
					hide={handlePinPopupVisible}
					clickElement={addPinButton.current}
				>
					<p>Sorry, but you have to sign-in first :(</p>
				</ModalTransparentSmall>
			) : null}
			<div className="header__search-field d-flex flex-grow-1 mx-2 position-relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-search position-absolute translate-middle top-50 header__search-icon"
					viewBox="0 0 16 16"
				>
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
				<input
					type="text"
					className="header__search-input form-control pl-5"
					placeholder="search"
					aria-label="search"
					aria-describedby="input-group-left"
				/>
			</div>
			{isAuth ? (
				<div className={`navbar-collapse collapse mx-2 flex-grow-0 `}>
					<div className="col-6 mx-1">
						<SecondaryIcon notifsCount={messagesCount}>
							<BellIcon />
						</SecondaryIcon>
					</div>

					<div className="col-6 mx-1">
						<SecondaryIcon notifsCount={notifsCount}>
							<ChatIcon />
						</SecondaryIcon>
					</div>
				</div>
			) : null}
			{auth}
			{profileLink.current ? (
				<PopItem
					clickElement={profileLink.current}
					isShow={isContextMenuVisible}
					show={setIsContextMenuVisible}
				>
					<ContextMenu
						show={setIsContextMenuVisible}
						visible={isContextMenuVisible}
						items={[logoutItem]}
					/>
				</PopItem>
			) : null}
			<div className="header__burger">
				<Burger burgerVisible={burgerVisible} toggle={toggleBurgerMenu}>
					<ContextMenu show={toggleBurgerMenu} visible={burgerVisible} items={items} />
				</Burger>
			</div>
		</div>
	);
}
