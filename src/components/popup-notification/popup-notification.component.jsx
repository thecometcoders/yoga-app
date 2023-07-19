import { useContext } from "react";
import { NotificationContext } from "../../contexts/notication.context";
import {
  NotificationOff,
  NotificationOn,
  LogoContainer,
  CloseLogo,
  CheckCircle,
} from "./popup-notification.styles";

const PopupNotification = (props) => {
  const [notification, setNotification, message] =
    useContext(NotificationContext);
  const switcher = () => {
    setNotification(!notification);
  };
  return (
    <>
      {notification ? (
        <NotificationOn>
          <LogoContainer onClick={switcher}>
            <CloseLogo />
          </LogoContainer>
          <CheckCircle />
          <h2>{message}</h2>
          <h3>Namaste🙏!</h3>
        </NotificationOn>
      ) : (
        <NotificationOff />
      )}
    </>
  );
};

export default PopupNotification;
