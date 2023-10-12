import { ISingInProps } from "../pages/SignInPage/Index";
import instance from "../services/api";
import { AxiosError } from "axios";

export const useAuth = () => {
  async function login(data: ISingInProps) {
    const body = {
      email: data.email,
      password: data.password,
      remember: data.remember,
    };
    try {
      const response = await instance.post("/auth", body);
      return response;
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.message);
    }
  }

  async function disconnectLogin() {
    try {
      const response = instance.post("/auth/disconnect", {
        Headers: {
          closeAllSessions: true,
        },
      });

      return response;

    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.message);
    }
  }

  async function validateTokenRefresh(token: string, refreshToken: string) {
    const body = {
      refreshToken: `${refreshToken}`,
    };
    try {
      const response = await instance.post("/auth/refresh", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.message);
    }
  }

  return {
    login,
    validateTokenRefresh,
    disconnectLogin
  };
};
