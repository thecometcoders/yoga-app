import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: true,
  setNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(false);

  const value = [notification, setNotification];

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
