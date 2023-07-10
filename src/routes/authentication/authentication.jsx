import { useContext } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/Footer/footer.component";
import { AuthenticationContext } from "../../contexts/authentication.context";
import SignIn from "../../components/sing-in-form/sign-in.component";
import SignUp from "../../components/sing-up-form/sign-up.components";
import PopupNotification from "../../components/popup-notification/popup-notification.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // const [isActive, setIsActive] = useState(false);
  const [isActive] = useContext(AuthenticationContext);
  let wrapper = "wrapper";
  let wrapperActive = "wrapper active";
  console.log("Active Log = " + isActive);

  return (
    <div className="web-view">
      <Navbar />
      <div className="container">
        <PopupNotification />
        <div className={isActive ? wrapperActive : wrapper}>
          {/* Log In */}
          <SignIn />
          {/*Register*/}
          <SignUp />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
