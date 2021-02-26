import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.scss";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {}, []);

  return (
    <Router>
      <div>
        {showAlert && <div class="superbar"></div>}

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home setShowAlert={setShowAlert} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home({ setShowAlert, showAlert }) {
  return (
    <h2>
      Home <button onClick={() => setShowAlert(!showAlert)}>Toggle</button>
    </h2>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
