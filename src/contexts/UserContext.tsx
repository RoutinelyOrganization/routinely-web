import { createContext, useState } from "react";
import { ISingInProps } from "../pages/SignInPage/Index";
import { useAuth } from "../hooks/useAuth";
import { AxiosResponse } from "axios";
interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  user: ISingInProps;
  setUser: React.Dispatch<React.SetStateAction<ISingInProps>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  loginContext: (data: ISingInProps) => Promise<
    | AxiosResponse<
        {
          token: string;
          refreshToken: string;
        },
        unknown
      >
    | undefined
  >;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);
UserContext.displayName = "User Context";

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<ISingInProps>({ email: "", password: "", remember: false });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const { login } = useAuth();

  const loginContext = async (data: ISingInProps) => {
    const response: AxiosResponse<{ token: string; refreshToken: string }> | undefined = await login(data);
    setUser(data);
    return response;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        loginContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
