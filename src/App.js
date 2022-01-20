import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import ProjectAddPage from "./components/pages/ProjectAddPage/ProjectAddPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import ProjectEditPage from "./components/pages/ProjectEditPage/ProjectEditPage";

function App() {
  return (
 <div>
     <Router>
         <Switch>
             <Route path="/" component={MainPage} exact />
             <Route path="/project/:id" component={ProjectPage} />
             <Route path="/project-edit/:id" component={ProjectEditPage} />
             <Route path="/project-add" component={ProjectAddPage} />
             <Route path="/login" component={LoginPage} />
         </Switch>
     </Router>
 </div>
  );
}

export default App;
