import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import Styles
import './styles/App.scss';
// Import Components
import { Nav, Browser, History } from './components';

function App() {
  const [fileHistory, setFileHistory] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact render={(routerProps) => (<Browser {...routerProps} fileHistory={fileHistory} setFileHistory={setFileHistory} />)} />
          <Route path="/history" render={(routerProps) => (<History {...routerProps} fileHistory={fileHistory} setFileHistory={setFileHistory} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;