import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (false) {
          //si el usuario esta registrado lo manda a el componente y si no lo manda al login
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                search: `${
                  location.pathname === "/" ? "" : `?next=${location.pathname}` //guadar la ultima busueda
                }`,
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
