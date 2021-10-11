import { CssBaseline } from "@material-ui/core";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../../pages/login/LoginScreen";
import useStyles from "./styles";

import PrivateRoute from "../PrivateRoute";
import App from "../../App";
const MainRoutes = () => {
  const classes = useStyles();
  return (
    <Router>
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Switch>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <PrivateRoute path="/">
              <App />
            </PrivateRoute>
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default MainRoutes;
