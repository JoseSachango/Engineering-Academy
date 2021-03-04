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
import Conversion from "./mycomponents/exercises/conversionChp1"
import ForceandWeight from "./mycomponents/exercises/ForceandWeightChp1"
import ScientificNotation from "./mycomponents/exercises/ScientificNotationChp1";
import Estimation from "./mycomponents/exercises/EstimationChp1";
import Simulator from "./mycomponents/Simulator";
import Table from "./mycomponents/Throwawaycomponent"
import UnitTable from "./mycomponents/unitTable"
import NewProject from "./mycomponents/newProjectComponents"



function App() {
  return (
    <>
        <Router>
          <div>
           
            <Switch>
              <Route exact path={["/"]}>
                {/*<DocumentationExperiment/>
                
                
                */}
                <DocumentationExperiment/>
                <Mydashboard />
              </Route>
              <Route exact path={["/ChemProCourse"]}>
                <ChemProCourse />
              </Route>
              <Route exact path={["/NewProject"]}>
                <NewProject />
              </Route>
              <Route exact path={["/Simulator"]}>
                {/*
                <Table/>
                 <UnitTable/>
                 */}
                  <Simulator/>
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1"]}>
                <Chapter />
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1/Conversion"]}>
                <Conversion />
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1/ForceandWeight"]}>
                <ForceandWeight />
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1/ScientificNotation"]}>
                <ScientificNotation />
              </Route>
              <Route exact path={["/ChemProCourse/Chapter1/Estimation"]}>
                <Estimation />
              </Route>
             
            </Switch>
          </div>
        </Router>
      
    </>
  );
}


export default App;
