import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Favorites from './pages/Favorites';
import List from './pages/List';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
