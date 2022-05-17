import * as React from 'react';

export interface IHeaderProps {
  isAuth: boolean;
  areNotifs: boolean;
}

export default function Header(props: IHeaderProps) {
  const iconWidth = 35;
  return (
    <header className="d-flex px-5 py-3 mb-4 align-items-center justify-content-between  border-bottom ">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconWidth}
          height={iconWidth}
          fill="currentColor"
          className="bi bi-pinterest"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
        </svg>
      </a>
      <button className="btn btn-dark text-white rounded-pill">Home</button>
      <div className="input-group">
        <span className="input-group-text" id="input-group-left-example">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="input-group-left"
        />
      </div>

      <span className="notif-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconWidth}
          height={iconWidth}
          fill="currentColor"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </span>
      <span className="message-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconWidth}
          height={iconWidth}
          fill="currentColor"
          className="bi bi-chat-dots-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </span>
      <a href="" className="profile-icon"></a>
    </header>
  );
}
