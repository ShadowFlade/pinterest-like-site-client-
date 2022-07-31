import * as React from 'react';
import { useRef, useState } from 'react';
import DefButton from '../defButton/defButton';
import ModalTransparentSmall from '../ModalTransparentSmall/ModalTransparentSmall';
import './CookiePrompts.scss';
export default function CookiePrompt() {
	const [isTransparent, setIsTransparent] = useState(false);
	const [target, setTarget] = useState<HTMLElement | null>(null);
	const cookie = useRef<HTMLDivElement | null>(null);
	const hide = () => {
		setIsTransparent(false);
	};
	const removeCookies = () => {
		cookie.current && cookie.current.remove();
		setIsTransparent(false);
	};
	const fakeCookies = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		setTarget(target);
		setIsTransparent(true);
		setTimeout(removeCookies, 3000);
	};
	return (
		<div className="cookie-prompt container-fluid" ref={cookie}>
			<div className="cookie-prompt__inner row align-items-center py-3 px-3">
				<div className="cookie-prompt__text col-8">
					<p>
						We use cookies to deliver personalized ads and experiences, and to analyze
						traffic on our site. Read our <strong>cookie policy</strong> for more
						information
					</p>
				</div>
				<div className="cookie-prompt__buttons col-4 d-flex ">
					<div className="cookie-prompt__button mx-1" onClick={fakeCookies}>
						<DefButton>Accept all cookies</DefButton>
					</div>
					<div className="cookie-prompt__button mx-1" onClick={fakeCookies}>
						<DefButton>Reject all cookies</DefButton>
					</div>
					<div className="cookie-prompt__button mx-1" onClick={fakeCookies}>
						<DefButton>Let me choose</DefButton>
					</div>
				</div>
			</div>
			{target && (
				<ModalTransparentSmall clickElement={target} isVisible={isTransparent} hide={hide}>
					<p>Haha!We don't actually use cookies!</p>
				</ModalTransparentSmall>
			)}
		</div>
	);
}
