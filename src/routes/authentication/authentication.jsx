import { useState } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/Footer/footer.component";
import "./authentication.styles.scss";

const Authentication = () => {
  const [isActive, setIsActive] = useState(false);
  let wrapper = "wrapper";
  let wrapperActive = "wrapper active";
  const handleSwitch = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div className="web-view">
      <Navbar />
      <div className="container">
        <div className={isActive ? wrapperActive : wrapper}>
          {/* Sing In Form ************************************** */}
          <div className="form-box singIn">
            <h2>Sign in</h2>
            <form>
              <div className="input-box">
                <input
                  className="input"
                  label="email"
                  name="email"
                  type="email"
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
                  required
                />
                <label>Password</label>
              </div>
            </form>
            <button type="submit" className="btn">
              {" "}
              Log in
            </button>
            <button type="button" className="btn">
              {" "}
              Sing in whit Google
            </button>
            <div className="sing-in-register">
              <a className="a-forgot-password">Forgot Password?</a>
              <hr className="separator-line" />
              <p>Don't have a account?</p>
              <a className="register-link" onClick={handleSwitch}>
                Register
              </a>
            </div>
          </div>
          {/*Register Form ****************************************** */}
          <div className="form-box register">
            <h2>Sign Up </h2>
            <form>
              <div className="input-box">
                <input
                  className="input"
                  label="displayName"
                  name="displayName"
                  type="text"
                  required
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
                />
                <label>Password</label>
              </div>
              <div className="input-box">
                <input
                  className="input"
                  label="password"
                  name="password"
                  type="password"
                  required
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
              <a className="login-link" onClick={handleSwitch}>
                Sign In
              </a>
            </div>
          </div>

          {/* Wrapper Ends */}
        </div>

        {/* container end */}
      </div>
      <Footer />

      {/* Web View Ends */}
    </div>
  );
};

export default Authentication;
