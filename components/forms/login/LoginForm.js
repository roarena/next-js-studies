import { useRef } from "react";

import Card from "../../ui/Card";
import classes from "./LoginForm.module.css";

function LoginForm(props) {
  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredLoginUser = loginInputRef.current.value;
    const enteredLoginPassword = passwordInputRef.current.value;

    const loginData = {
      emial: enteredLoginUser,
      password: enteredLoginPassword,
    };

    props.onLogin(loginData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="login">Login</label>
          <input type="email" required id="email" ref={loginInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Senha</label>
          <input type="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          Ainda não tem uma conta? Registre-se agora. <button>Login</button>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
