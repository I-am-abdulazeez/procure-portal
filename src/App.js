import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MyAccount from "./pages/MyAccount";
import Dashboard from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify"
import Register from "./pages/Register";
import Settings from "./pages/Settings";

import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <DashboardLayout>
            <Route path="/home" component={Dashboard} exact />
            <Route path="/account" component={MyAccount} exact />
            <Route path="/settings" component={Settings} exact />
          </DashboardLayout>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
