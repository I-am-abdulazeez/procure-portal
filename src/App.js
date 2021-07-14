import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MyAccount from "./components/MyAccount";
import Dashboard from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <DashboardLayout>
            <Route path="/home" component={Dashboard} exact />
            <Route path="/account" component={MyAccount} exact />
          </DashboardLayout>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
