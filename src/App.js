import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
      </Switch>   
    </BrowserRouter>
  );
}

export default App;
