import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </div>
  );
};

export default App;
