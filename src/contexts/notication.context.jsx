import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: true,
  setNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("You are registered");

  const value = [notification, setNotification, message, setMessage];

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
