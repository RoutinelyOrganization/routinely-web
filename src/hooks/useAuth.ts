import { ISingInProps } from "../pages/SignInPage/Index";
import instance from "../services/api";
import { AxiosError } from "axios";

export const useAuth = () => {
  async function login(data: ISingInProps) {
    try {
      const response = await instance.post("/auth", data);
      return response;
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.message);
    }
  }

  async function disconnectLogin(token: string) {
    const body = {
      closeAllSessions: true,
    };
    try {
      await instance.post("/auth/disconnect", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.clear();

      return;
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
      console.error(erro.message);
    }
  }

  return {
    login,
    validateToken,
    disconnectLogin,
  };
};
