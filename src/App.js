import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import "./App.css";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import IfOffline from "./components/IfOffline";

// Create an instance of browserHistory
const history = createBrowserHistory();

// Initialize Google Analytics with your ID
ReactGA.initialize("UA-000000-01");
// When the '/' will open we making the tracking
ReactGA.pageview(window.location.pathname + window.location.search);
// When the user use the app, we use tracking with GA
history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header>
            <Link to="/">
              Recetas <IfOffline>Offline</IfOffline>
            </Link>
            <Link to="/timer" className="timerLink">
              🕐
            </Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </Router>
    );
  }
}
