// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch , Router  } from "react-router-dom";
import './App.css';
import NavbarComponent from './navbarComponent';
import Home from './home';
import About from './about';
import SignIn from './signIn';
import Shop from './shop';
import MaleWears from './maleWears';
import FemaleWears from './femaleWears';
import ChildrenWears from './childrenWears';
import Login from './LoginComponent';
import ErrorPage from './errorPage';


function App() {
  return (
    <div className="App">
        <Router>
            <header>
              <NavbarComponent/>
            </header>
            
            <Switch>
            <Route exact  path="/">
            < Home />
            </Route>
            <Route exact  path="/about">
            < About us />
            </Route>
            <Route exact  path="/signIn">
            < SignIn />
            </Route>
            <Route exact  path="/shop">
            < Shop Now/>
            </Route>
            <Route exact  path="/maleWears">
            < MaleWears/>
            </Route>
            <Route exact  path="/femaleWears">
            < FemaleWears />
            </Route>
            <Route exact  path="/childrenWears">
            < ChildrenWears />
            </Route>
            <Route exact  path="/logIn">
            < Login />
            </Route>
            <Route path="*">
          <ErrorPage />
        </Route>
            </Switch> 

        </Router>
    </div>
  );
}

export default App;
