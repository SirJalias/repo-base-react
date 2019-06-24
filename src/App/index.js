import React from "react";
import styled from "@emotion/styled";
import { Route, Link } from "react-router-dom";
import mq from "lib/mq";
import { useDispatch } from "react-redux";

const Main = styled.div`
  ${mq({
    color: ["red", "green", "blue"]
  })}
`;

function Home() {
  return (
    <Main>
      <h2>Home</h2>
    </Main>
  );
}

function About() {
  return (
    <Main>
      <h2>About</h2>
    </Main>
  );
}

function BasicExample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

const App = () => {
  const dispatch = useDispatch();
  return (
    <Main>
      This is an app
      <BasicExample />
      <button type="button" onClick={() => dispatch({ type: "TEST" })}>
        TEST
      </button>
    </Main>
  );
};

export default App;
