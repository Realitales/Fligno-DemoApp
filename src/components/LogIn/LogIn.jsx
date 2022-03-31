import React from "react";
import { Link } from "react-router-dom";
import { login, useAuth } from "../../firebase";
import { LoadingState } from "../LoadingState";
import { Navigate } from "react-router-dom";
import StyledLogIn from "./StyledLogIn";
import { motion } from "framer-motion";

export default function LogIn() {
  const [loading, setLoading] = React.useState();
  const [errors, setInputError] = React.useState({
    emptyFields: false,
    wrongPassword: false,
    userDoesNotExist: false,
  });

  const currentUserFirebase = useAuth();

  const currentUser = currentUserFirebase?.email;

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  async function handleLogin() {
    const UserInputs = {
      username: usernameRef.current.value + "@gamearea.com",
      password: passwordRef.current.value,
    };

    if (UserInputs.username === "" || UserInputs.password === "") {
      setInputError((error) => {
        return {
          ...error,
          emptyFields: true,
          wrongPassword: false,
          userDoesNotExist: false,
        };
      });
      return;
    }
    setLoading(true);
    try {
      await login(UserInputs.username, UserInputs.password);
    } catch (error) {
      const errorCatch = error.code.replace("auth/", "");

      if (errorCatch === "user-not-found") {
        setInputError((error) => {
          return {
            ...error,
            emptyFields: false,
            wrongPassword: false,
            userDoesNotExist: true,
          };
        });
        setLoading(false);
        return;
      }

      if (errorCatch === "wrong-password") {
        setInputError((error) => {
          return {
            ...error,
            emptyFields: false,
            wrongPassword: true,
            userDoesNotExist: false,
          };
        });
        setLoading(false);
        return;
      }
    }
    setInputError((error) => {
      return {
        ...error,
        emptyFields: false,
        wrongPassword: false,
        userDoesNotExist: false,
      };
    });
    setLoading(false);
  }

  return (
    <motion.div
      initial={{ y: 0, scale: 0 }}
      animate={{ y: 340, scale: 1 }}
      transition={{ type: "spring", stiffness: 75, duration: 0 }}
    >
      <StyledLogIn>
        {loading === true ? (
          <LoadingState />
        ) : (
          <>
            {currentUser === undefined ? (
              <div className="Login-Content">
                <h1>Login</h1>
                {errors.emptyFields === true ? (
                  <span className="error-text">
                    Please fill in the Empty fields.
                  </span>
                ) : (
                  ""
                )}
                {errors.wrongPassword === true ? (
                  <span className="error-text">Wrong Password.</span>
                ) : (
                  ""
                )}
                {errors.userDoesNotExist === true ? (
                  <span className="error-text">User does not exist.</span>
                ) : (
                  ""
                )}
                <hr />
                <form>
                  <input
                    type="Username"
                    placeholder="USERNAME"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "USERNAME")}
                    ref={usernameRef}
                  />
                  <input
                    type="Password"
                    placeholder="PASSWORD"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "PASSWORD")}
                    ref={passwordRef}
                  />
                </form>
                <hr />
                <button id="login-btn" onClick={handleLogin}>
                  Login
                </button>
                <span>
                  Not a member?
                  <br />
                  <Link to="/signup">SIGN UP</Link>
                </span>
              </div>
            ) : (
              <Navigate replace to="/userprofile" />
            )}
          </>
        )}
      </StyledLogIn>
    </motion.div>
  );
}
