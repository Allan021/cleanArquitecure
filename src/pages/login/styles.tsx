import { makeStyles } from "@material-ui/core";
import {
  background,
  backgroundHover,
  boxShadowFocus,
  errorText,
  onBackground,
  onBackgroundIcon,
} from "../../styles/colors";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: background,
    height: "500px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  loginImage: {
    width: "300px",
    height: "auto",
    padding: "0px 10px",
  },
  loginContainer: {
    width: "400px",
    backgroundColor: "white",
    flexGrow: 1,
    alignSelf: "stretch",
    padding: "0px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  loginTitle: {
    marginTop: "30px",
    fontSize: "1.22rem",
    fontWeight: 500,
    color: onBackground,
  },
  loginText: {
    marginTop: "10px",
    fontSize: "0.87rem",
    fontWeight: 400,
    color: onBackgroundIcon,
  },
  form: {
    marginTop: "48px",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    fontSize: "0.8rem",
    backgroundColor: background,
    borderRadius: 5,
    padding: "8px 12px",
    transition: "background-color 150ms, box-shadow 200ms ease-in",
    "&:hover": {
      backgroundColor: backgroundHover,
    },
    "&:focus": {
      backgroundColor: backgroundHover,
      boxShadow: `0 0 5px ${boxShadowFocus}`,
    },
  },
  passwordField: {
    marginTop: "16px",
  },
  rememberMeField: {
    marginTop: "24px",
  },
  progressIndicator: {
    alignSelf: "center",
    flexGrow: 1,
    display: "flex",
  },
  formError: {
    color: errorText,
    fontSize: "0.8rem",
    fontWeight: 500,
    alignSelf: "center",
    marginTop: "16px",
  },
  loginButton: {
    marginTop: "32px",
    alignSelf: "center",
  },
});

export default useStyles;
