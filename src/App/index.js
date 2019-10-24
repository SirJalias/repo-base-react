import React from "react";
import styled from "@emotion/styled";
import { Route, Link } from "react-router-dom";
import mq from "lib/mq";
import { useDispatch } from "react-redux";
import Spinner from "./LazyLoadingComponent/Spinner";
import LazyLoadingComponent from "./LazyLoadingComponent";
import Cards from "./Cards";

const Main = styled.div(
  { minWidth: "100px" },
  mq({
    color: ["red", "green", "blue"]
  })
);

const Ex = styled.div(
  { width: "100px", height: "100px" },
  mq({ backgroundColor: ["blue", "orange", "black"] })
);

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

      <LazyLoadingComponent>
        <img
          alt="img1"
          src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </LazyLoadingComponent>
      <LazyLoadingComponent>
        <img
          alt="img2"
          src="https://images.pexels.com/photos/948889/pexels-photo-948889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </LazyLoadingComponent>
      <LazyLoadingComponent>
        <img
          alt="img3"
          src="https://media-public.canva.com/MAAuzY2IC-M/1/screen_2x.jpg"
        />
      </LazyLoadingComponent>
    </div>
  );
}

const App = () => {
  const dispatch = useDispatch();
  return (
    <Main>
      This is an app
      <Cards />
      <button type="button" onClick={() => dispatch({ type: "TEST" })}>
        TEST
      </button>
    </Main>
  );
};

export default App;
