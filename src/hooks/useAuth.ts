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

  async function validateToken(token: string, year?: number, month?: number) {
    const date = new Date();
    year = year || date.getFullYear();
    month = month || date.getMonth() + 1;

    const params = {
      year,
      month,
    };

    try {
      const response = await instance.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      });

      return response;
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.response?.data);
    }
  }

  return {
    login,
    validateToken,
    disconnectLogin,
  };
};
