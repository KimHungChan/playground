import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import Home from "./components/Home/Home";

const NavPad = styled.div`
  height: ${(props) => props.height + "px" || "64px"};
  width: 100%;
`;

const NavStyle = styled.nav`
  background-color: black;
  width: 100%;
  height: ${(props) => props.height + "px" || "64px"};
`;

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [navContainerHeight, setNavContainerHeight] = useState(null);
  const [navHeight, setNavHeight] = useState(null);

  const calculateNavbarHeight = () => {
    setNavContainerHeight(
      document.getElementById("nav-container").clientHeight
    );
  };

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setNavHeight(64);
      console.log("top");
    } else {
      setNavHeight(128);
    }
    calculateNavbarHeight();
  };

  useEffect(() => {
    calculateNavbarHeight();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div>
        <div id="nav-container">
          {showAlert && <div class="superbar"></div>}
          <NavStyle height={navHeight} id="nav">
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
          </NavStyle>
        </div>

        <Switch>
          <Route path="/about">
            <NavPad height={navContainerHeight} />
            <About />
          </Route>
          <Route path="/users">
            <NavPad height={navContainerHeight} />
            <Users />
          </Route>
          <Route path="/">
            <>
              <NavPad height={navContainerHeight} />
              <Home navContainerHeight={navContainerHeight} />
              <button
                style={{ position: "absolute", top: "30rem" }}
                onClick={async () => {
                  await setShowAlert(!showAlert);
                  calculateNavbarHeight();
                }}
              >
                Toggle notification
              </button>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
