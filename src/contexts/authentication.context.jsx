import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  isActive: false,
  setIsActive: () => {},
});

export const AuthenticationProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  // const handleSwitch = () => {
  //   setIsActive(!isActive);
  // };

  const value = [isActive, setIsActive];

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
