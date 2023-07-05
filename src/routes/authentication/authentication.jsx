import { useContext } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/Footer/footer.component";
import { AuthenticationContext } from "../../contexts/authentication.context";
import SignIn from "../../components/sing-in-form/sign-in.component";
import SignUp from "../../components/sing-up-form/sign-up.components";
import "./authentication.styles.scss";

const Authentication = () => {
  // const [isActive, setIsActive] = useState(false);
  const [isActive] = useContext(AuthenticationContext);
  console.log(isActive);
  let wrapper = "wrapper";
  let wrapperActive = "wrapper active";

  return (
    <div className="web-view">
      <Navbar />
      <div className="container">
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
