
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";

function App() {
  return (
 <div>
     <Router>
         <Switch>
             <Route path="/" component={MainPage} exact />
             <Route path="/project/:id" component={ProjectPage} />
         </Switch>
     </Router>

 </div>


  );
}

export default App;
