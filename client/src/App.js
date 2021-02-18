import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton"
import LandingPage from "./components/LandingPage"
import DocumentationExperiment from "./components/DocumentationExperiment"
//import DashboardExperiments from "./components/DashboardExperiments"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mydashboard from "./mycomponents/myDashboard"
import ChemProCourse from "./mycomponents/ChemProCourse"
import Chapter from "./mycomponents/Chapter"


function App() {
  return (
    <>
        <Router>
          <div>
           
            <Switch>
              <Route exact path={["/"]}>
                {/*<DocumentationExperiment/>*/}
                <Mydashboard />
              </Route>
              <Route exact path={["/ChemProCourse"]}>
                <ChemProCourse />
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1"]}>
                <Chapter />
              </Route>
             
            </Switch>
          </div>
        </Router>
      
    </>
  );
}


export default App;
