import { useContext } from "react";
import { NotificationContext } from "../../contexts/notication.context";
import { ReactComponent as CheckLogo } from "../../assets/checkmark-circle-outline.svg";
import { ReactComponent as Close } from "../../assets/close-outline.svg";

import "./popup-notification.styles.scss";

const PopupNotification = () => {
  const [notification, setNotification] = useContext(NotificationContext);
  let offNotification = "notification off";
  let activateNotification = "notification show";
  console.log("Notification Log = " + notification);

  return (
    <div className={notification ? activateNotification : offNotification}>
      <span
        className="close-container"
        onClick={() => {
          setNotification(!notification);
        }}
      >
        <Close className="close-logo" />
      </span>
      <CheckLogo className="check-logo" />
      <h2 className="greetings">You are whit us!</h2>
      <h3>Namaste🙏!</h3>
    </div>
  );
};

export default PopupNotification;
