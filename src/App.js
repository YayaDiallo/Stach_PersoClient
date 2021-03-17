import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/' />
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
