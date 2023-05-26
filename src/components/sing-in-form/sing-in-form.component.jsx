import "./sing-in-form.styles.scss";
import { ReactComponent as EyeLogo } from "../../assets/eye-outline.svg";
import { ReactComponent as CloseLogo } from "../../assets/close-circle-outline.svg";

const SingInPopup = () => {
  return (
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
              required
            ></input>
            <label>Email</label>
          </div>
          <div className="input-box">
            <EyeLogo className="eye-logo" />
            <input
              className="input"
              label="password"
              type="password"
              required
            ></input>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input className="checkbox" type="checkbox" /> Remember Me
            </label>
          </div>
        </form>
        <button type="submit" className="btn">
          {" "}
          Log in
        </button>
        <div className="sing-in-register">
          <a className="a-forgot-password">Forgot Password?</a>
          <hr className="separator-line" />
          <p>Don't have a account?</p>
          <a className="a-sing-up-a ">Sing Up</a>
        </div>
      </div>
    </div>
  );
};

export default SingInPopup;
