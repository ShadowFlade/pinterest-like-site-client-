import { setUseProxies } from 'immer';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
const App = () => {
  const [x, setX] = React.useState(false);
  return (
    <>
      <Header isAuth={false} notifsCount={5} messagesCount={10}></Header>
    </>
  );
};

export default App;
