import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminPage from "./Components/AdminPage";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
