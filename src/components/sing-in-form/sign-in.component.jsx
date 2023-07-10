import { useContext, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SingInAuthUserWhitEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { NotificationContext } from "../../contexts/notication.context";
import { AuthenticationContext } from "../../contexts/authentication.context";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [notification, setNotification] = useContext(NotificationContext);
  const [isActive, setIsActive] = useContext(AuthenticationContext);
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setNotification(!notification);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logInWhitGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await SingInAuthUserWhitEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Your Password is incorrect");
          break;
        case "auth/user-not-found":
          alert("No user associated whit this Email ");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="form-box singIn">
      <h2>Sign in</h2>
      <form>
        <div className="input-box">
          <input
            className="input"
            label="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            required
          />
          <label>Email</label>
        </div>
        <div className="input-box">
          <input
            className="input"
            label="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            required
          />
          <label>Password</label>
        </div>
      </form>
      <button type="submit" className="btn" onClick={handleSubmit}>
        {" "}
        Log in
      </button>
      <button type="button" className="btn" onClick={logInWhitGoogle}>
        {" "}
        Sing in whit Google
      </button>
      <div className="sing-in-register">
        <a className="a-forgot-password">Forgot Password?</a>
        <hr className="separator-line" />
        <p>Don't have a account?</p>
        <a
          className="register-link"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default SignIn;
