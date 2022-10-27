// import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import ProjectAddPage from "./components/pages/ProjectAddPage/ProjectAddPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import ProjectEditPage from "./components/pages/ProjectEditPage/ProjectEditPage";
import RegistrationPage from "./components/pages/RegistrationPage/RegistrationPage";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
 <>
     <Router>
         <Switch>
             <Route path="/" component={MainPage} exact />
             <Route path="/project/:id" component={ProjectPage} />
             <Route path="/project-edit/:id" component={ProjectEditPage} />
             <Route path="/project-add" component={ProjectAddPage} />
             <Route path="/login" component={LoginPage} />
             <Route path="/registration" component={RegistrationPage} />
             <Redirect to={'/'}/>
         </Switch>
     </Router>
 </>
  );
}

export default App;