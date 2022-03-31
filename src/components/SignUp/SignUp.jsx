import React, { useRef } from "react";
import db, { signup, useAuth } from "../../firebase";
import { Link, Navigate } from "react-router-dom";
import { LoadingState } from "../LoadingState";
import StyledSignUp from "./StyledSignUp";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";

export default function SignUp() {
  const [loading, setLoading] = React.useState(false);

  const currentUserFirebase = useAuth();

  const currentUser = currentUserFirebase?.email;

  const [inputErrors, setinputError] = React.useState({
    emptyFieldError: false,
    passwordDoNotMatchError: false,
    usernameTaken: false,
  });

  const emailRef = useRef("");
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSignup() {
    const UserInputs = {
      email: emailRef.current.value + "@gamearea.com",
      password: passwordRef.current.value,
    };

    if (
      UserInputs.email === "" ||
      UserInputs.password === "" ||
      passwordConfirmRef.current.value === ""
    ) {
      setinputError((prev) => {
        return {
          ...prev,
          emptyFieldError: true,
          passwordDoNotMatchError: false,
          usernameTaken: false,
        };
      });
      return;
    }
    if (UserInputs.password !== passwordConfirmRef.current.value) {
      setinputError((prev) => {
        return {
          ...prev,
          passwordDoNotMatchError: true,
          emptyFieldError: false,
          usernameTaken: false,
        };
      });
      return;
    }
    setLoading(true);
    try {
      await signup(UserInputs.email, UserInputs.password);
      setinputError((prev) => {
        return {
          ...prev,
          passwordDoNotMatchError: false,
          emptyFieldError: false,
          usernameTaken: false,
        };
      });
    } catch (error) {
      setinputError((prev) => {
        return {
          ...prev,
          usernameTaken: true,
          passwordDoNotMatchError: false,
          emptyFieldError: false,
        };
      });
    }
    setLoading(false);
  }

  const handleNew = async () => {
    const collectionRef = collection(db, "users-info");
    const payload = { username: emailRef.current.value, address: "" };
    await addDoc(collectionRef, payload);
  };

  return (
    <motion.div
      initial={{ y: 0, scale: 0 }}
      animate={{ y: 340, scale: 1 }}
      transition={{ type: "spring", duration: 0.7, stiffness: 75 }}
    >
      <StyledSignUp>
        {loading === true ? (
          <LoadingState />
        ) : (
          <div className="Signup-content">
            {currentUser === undefined ? (
              <>
                <h1>Sign Up</h1>
                <span>
                  Already a member? <Link to="/login">Login</Link>
                </span>
                <hr />
                <form>
                  <input
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "USERNAME")}
                    ref={emailRef}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "PASSWORD")}
                    ref={passwordRef}
                    required
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="CONFIRM PASSWORD"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "CONFIRM PASSWORD")}
                    ref={passwordConfirmRef}
                    required
                  />
                </form>
                <hr />
                {inputErrors.emptyFieldError === true ? (
                  <span className="error-text">
                    Please fill in the empty fields.
                  </span>
                ) : (
                  ""
                )}
                {inputErrors.passwordDoNotMatchError === true ? (
                  <span className="error-text">Please match the password.</span>
                ) : (
                  ""
                )}
                {inputErrors.usernameTaken === true ? (
                  <span className="error-text">
                    That username has already been used.
                  </span>
                ) : (
                  ""
                )}
                <button
                  type="submit"
                  id="signup-btn"
                  disabled={loading}
                  onClick={() => {
                    handleSignup();
                    handleNew();
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <Navigate to="/login" />
            )}
          </div>
        )}
      </StyledSignUp>
    </motion.div>
  );
}
