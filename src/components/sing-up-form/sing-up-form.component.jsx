
import "./sing-up-form.component.styles.scss";
import  {ReactComponent as EyeLogo} from "../../assets/eye-outline.svg";
import { ReactComponent as CloseLogo} from "../../assets/close-circle-outline.svg";

const SingUpPopup = () => {

    return(

        <div className="wrapper">

       < CloseLogo className="close-logo"/>

        <div className="form-box-singUp">
        <h2>Sign Up </h2>
        <form>
        <div className="input-box">
           <input  className="input" label="user name" type='text' required></input>
            <label>User Name</label>
           </div>
           <div className="input-box">
           <input  className="input" label="email" type='email' required></input>
            <label>Email</label>
           </div>
           <div className="input-box">
            <EyeLogo className="eye-logo"/>
           <input className="input" label="password" type='password' required></input>
           <label>Password</label>
           </div>
           <div className="remember-forgot">
            <label><input className="checkbox" type="checkbox"/>I agree to the terms & conditions</label>
           </div>
        </form>
        <button type="submit" className="btn"> Sign Up</button>
        <div className="sing-in-register">
        <hr className="separator-line"/>
        <p>Already have a account? </p>
        <a className="a-sing-up-a">Sign In</a>
        </div>
       
        </div>
    
    
        </div>


    )




}

export default SingUpPopup;

