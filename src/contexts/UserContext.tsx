import { createContext, useEffect, useState } from "react";
import { ISingInProps } from "../pages/SignInPage/Index";
import { useAuth } from "../hooks/useAuth";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disconnectLoginContext: ()=> Promise<AxiosResponse<any, any> | undefined>
}

export const UserContext = createContext<IUserContext>({} as IUserContext);
UserContext.displayName = "User Context";

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<ISingInProps>({ email: "", password: "", remember: false });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const navigate = useNavigate();
  const { login, disconnectLogin, validateTokenRefresh } = useAuth();

  const loginContext = async (data: ISingInProps) => {
    const response: AxiosResponse<{ token: string; refreshToken: string }> | undefined = await login(data);
    setUser(data);
    return response;
  };

  const disconnectLoginContext = async () => {
    try {
      const response = await disconnectLogin();
      if (response?.status === 200) {
        window.localStorage.removeItem("token");
        setToken("");
        setRefreshToken("");
        navigate('/signInPage')
        console.log(response.status, 'funcionou ')
      }
      return response;
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro);
    }
  
  };

  useEffect(() => {
    try {
      const validateToken = async () => {
        
        if (token && refreshToken) {
          const response: AxiosResponse<{ token: string; refreshToken: string }> | undefined =
            await validateTokenRefresh(token, refreshToken);

          if (response?.status === 200) navigate("/dashboardpage");

          return response;
        }
        return;

        /* colocar um else para o login */
      };
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      validateToken();
    } catch (err) {
      console.log(err);
    }
  }, [refreshToken, token, validateTokenRefresh, navigate]);

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
        disconnectLoginContext
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
