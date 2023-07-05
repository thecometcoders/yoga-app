import { useContext, useState } from "react";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWhitEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignUp = () => {
  const [isActive, setIsActive] = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  console.log(formFields);
  const inputHandler = (event) => {
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do no match");
      return;
    }

    try {
      const { user } = await createAuthUserWhitEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      // return to the main page ones your Register
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user , email already in use");
      } else {
        console.error("user creation encounter a error", error);
      }
    }
  };

  return (
    <div className="form-box register">
      <h2>Sign Up </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            className="input"
            label="displayName"
            name="displayName"
            type="text"
            required
            value={displayName}
            onChange={inputHandler}
          />
          <label>User Name</label>
        </div>
        <div className="input-box">
          <input
            className="input"
            label="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={inputHandler}
          />
          <label>Email</label>
        </div>
        <div className="input-box">
          <input
            className="input"
            label="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={inputHandler}
          />
          <label>Password</label>
        </div>
        <div className="input-box">
          <input
            className="input"
            label="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            onChange={inputHandler}
          />
          <label>Confirm Password</label>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      <div className="sing-in-register">
        <hr className="separator-line" />
        <p>Already have a account? </p>
        <a
          className="login-link"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;
