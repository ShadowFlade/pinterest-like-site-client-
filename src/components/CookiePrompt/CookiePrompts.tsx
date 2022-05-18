import * as React from 'react';
import DefButton from '../defButton/defButton';
import './CookiePrompts.scss';
export default function CookiePrompt() {
  return (
    <div className="cookie-prompt container-fluid">
      <div className="cookie-prompt__inner row align-items-center py-3 px-3">
        <div className="cookie-prompts__text col-8">
          We use cookies to deliver personalized ads and experiences, and to analyze traffic on our
          site Read our <strong>cookie policy</strong> for more information
        </div>
        <div className="cookie-prompt__buttons col-4 ms-auto d-flex justify-content-end ">
          <div className="mx-1">
            <DefButton>Accept all cookies</DefButton>
          </div>
          <div className="mx-1">
            <DefButton>Reject all cookies</DefButton>
          </div>
          <div className="mx-1">
            <DefButton>Let me choose</DefButton>
          </div>
        </div>
      </div>
    </div>
  );
}
