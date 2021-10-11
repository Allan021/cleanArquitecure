import backgroundImage from "../../assets/img/background.jpg";
import loginImage from "../../assets/img/login_image.png";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Idle, ProcessStatus } from "../../core/Process";
import useStyles from "./styles";
import ProcessStatusContent from "../../components/ProcessStatusContent";

interface Form {
  error: null | string;
}

interface FormControl<T> {
  value: T;
  error: null | string;
}

const LoginScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loginProcess, setLoginProcess] = useState<ProcessStatus<boolean>>(
    new Idle()
  );

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.container}>
        <img className={classes.loginImage} src={loginImage} alt="Login" />
        <div className={classes.loginContainer}>
          <h1 className={classes.loginTitle}>Login</h1>
          <p className={classes.loginText}>Loggueate wee</p>

          <ProcessStatusContent
            processStatus={loginProcess}
            idleContent={
              <>
                <form className={classes.form}>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        input: classes.input,
                      },
                    }}
                    label={"Email"}
                    placeholder={""}
                    type="email"
                  />
                  <TextField
                    classes={{
                      root: classes.passwordField,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        input: classes.input,
                      },
                    }}
                    label={"Tu contraseña"}
                    placeholder={"Contraseña"}
                    type="password"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    className={classes.rememberMeField}
                    label={"Recordame"}
                  />

                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              </>
            }
            processingContent={
              <>
                <CircularProgress className={classes.progressIndicator} />
              </>
            }
            exceptionContentFactory={null}
            successContentFactory={null}
            sameExceptionAsIdle={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
