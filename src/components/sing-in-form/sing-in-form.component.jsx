import { useState, useContext } from "react";
import { ReactComponent as EyeLogo } from "../../assets/eye-outline.svg";
import { ReactComponent as CloseLogo } from "../../assets/close-circle-outline.svg";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SingInAuthUserWhitEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sing-in-form.styles.scss";
import Navbar from "../navbar/navbar.component";
import Footer from "../Footer/footer.component";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

const SingInPopup = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
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
    <>
      <Navbar />
      <div className="wrapper">
        <CloseLogo className="close-logo" />

        <div className="form-box-singIn">
          <h2>Log in</h2>
          <form>
            <div className="input-box">
              <input
                className="input"
                label="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <EyeLogo className="eye-logo" />
              <input
                className="input"
                label="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input className="checkbox" type="checkbox" /> Remember Me
              </label>
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
            <Link to={"../sign-up"}>Sign Up</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingInPopup;
