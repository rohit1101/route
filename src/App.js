import React from "react";
import { DashBoard, Home, About } from "./DashBoard";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/dashboard">Dashboard</Link>
      <div>
        <Link to="/home">Home</Link>
      </div>

      <div>
        <Link to="/home">About</Link>
      </div>
      <Switch>
        <Route path="/dashboard" component={DashBoard} />

        <Route path="/home" component={Home} />

        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
