import * as React from 'react';
import DefButton from '../defButton/defButton';
import './CookiePrompts.scss';
export default function CookiePrompt() {
	return (
		<div className="cookie-prompt container-fluid">
			<div className="cookie-prompt__inner row align-items-center py-3 px-3">
				<div className="cookie-prompt__text col-8">
					<p>
						We use cookies to deliver personalized ads and experiences, and to analyze
						traffic on our site. Read our <strong>cookie policy</strong> for more
						information
					</p>
				</div>
				<div className="cookie-prompt__buttons col-4 d-flex ">
					<div className="cookie-prompt__button mx-1">
						<DefButton>Accept all cookies</DefButton>
					</div>
					<div className="cookie-prompt__button mx-1">
						<DefButton>Reject all cookies</DefButton>
					</div>
					<div className="cookie-prompt__button mx-1">
						<DefButton>Let me choose</DefButton>
					</div>
				</div>
			</div>
		</div>
	);
}
