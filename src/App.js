import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Shops } from './pages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/shops'>
            <Shops />
          </Route>
          <Route path='/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
