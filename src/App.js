//Libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import List from "./components/List/List";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
