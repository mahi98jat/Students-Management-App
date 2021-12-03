import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminPage from "./Components/AdminPage";
import ContestFill from "./Components/Contestdata";
import Contestshowdata from "./Components/Contestshowdata";
import Studentshowdata from "./Components/Studentshowdata";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/contest">
            <ContestFill />
          </Route>
          <Route path="/othercontest">
            <Contestshowdata />
          </Route>
          <Route path="/otherstudent">
            <Studentshowdata />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
