import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton"
import LandingPage from "./components/LandingPage"
import DocumentationExperiment from "./components/DocumentationExperiment"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
          <div>
           
            <Switch>
              <Route exact path={["/"]}>
                <DocumentationExperiment/>
              </Route>
            </Switch>
          </div>
        </Router>
      
    </>
  );
}


export default App;
