import "./sing-up-form.component.styles.scss";
import { ReactComponent as EyeLogo } from "../../assets/eye-outline.svg";
import { ReactComponent as CloseLogo } from "../../assets/close-circle-outline.svg";
import { useState } from "react";

const SingUpPopup = () => {
  const defaultFormFields = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;

  const inputHandler = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div className="sing-up-wrapper">
      <CloseLogo className="close-logo" />

      <div className="form-box-singUp">
        <h2>Sign Up </h2>
        <form onChange={inputHandler}>
          <div className="input-box">
            <input
              className="input"
              label="userName"
              name="userName"
              type="text"
              value={userName}
              required
            ></input>
            <label>User Name</label>
          </div>
          <div className="input-box">
            <input
              className="input"
              label="email"
              name="email"
              type="email"
              value={email}
              required
            ></input>
            <label>Email</label>
          </div>
          <div className="input-box">
            <EyeLogo className="eye-logo" />
            <input
              className="input"
              label="password"
              name="password"
              type="password"
              value={password}
              required
            ></input>
            <label>Password</label>
          </div>
          <div className="input-box">
            <EyeLogo className="eye-logo" />
            <input
              className="input"
              label="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              required
            ></input>
            <label>Confirm Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input className="checkbox" type="checkbox" />I agree to the terms
              & conditions
            </label>
          </div>
        </form>
        <button type="submit" className="btn">
          {" "}
          Sign Up
        </button>
        <div className="sing-in-register">
          <hr className="separator-line" />
          <p>Already have a account? </p>
          <a className="a-sing-up-a">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SingUpPopup;
