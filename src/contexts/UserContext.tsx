import { createContext, useState } from "react";
import { ISingInProps } from "../pages/SignInPage";
interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  user: ISingInProps;
  setUser: React.Dispatch<React.SetStateAction<ISingInProps>>;
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);
UserContext.displayName = "User Context";

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<ISingInProps>({ email: "", password: "", remember: false });
  const [showError, setShowError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showError,
        setShowError,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
