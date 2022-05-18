import { setUseProxies } from 'immer';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CookiePrompt from './components/CookiePrompt/CookiePrompts';
import Header from './components/Header/Header';
const App = () => {
  const [x, setX] = React.useState(false);
  return (
    <>
      <Header isAuth={false} notifsCount={5} messagesCount={10}></Header>
      <CookiePrompt />
    </>
  );
};

export default App;
