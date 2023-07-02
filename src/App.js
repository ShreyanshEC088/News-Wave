import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home">
              <News key="general" pageSize={9} country={"in"} domain="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={9} country={"in"} domain="business" />
            </Route>
            <Route exact path="/entment">
              <News key="ent" pageSize={9} country={"in"} domain="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="hel" pageSize={9} country={"in"} domain="health" />
            </Route>
            <Route exact path="/science">
              <News key="sci" pageSize={9} country={"in"} domain="science" />
            </Route>
            <Route exact path="/sports">
              <News key="spor" pageSize={9} country={"in"} domain="sports" />
            </Route>
            <Route exact path="/tech">
              <News key="tech" pageSize={9} country={"in"} domain="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

// export default App;
