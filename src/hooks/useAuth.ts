import axios, { AxiosError } from "axios";
import { ISingInProps } from "../pages/SignInPage";
import instance from "../services/api";

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
      return erro
      
    }
  }

  async function validateRefreshToken(token: string, refreshToken: string) {
    try {
      const response = await instance.post('/auth/refresh', {refreshToken}, {
        headers: {
        Authorization: `Bearer ${token}`,
        }
      })
      return response;
    } catch (error) {
      const erro = error as AxiosError;
      // console.log(erro);
      
      return erro
    }
  }

  async function authorization() {
    const tokenLocal = window.localStorage.getItem("token");
    const refreshTokenLocal = window.localStorage.getItem("refreshToken");

    if (!tokenLocal || !refreshTokenLocal) {
      return {valid:false}
    }

    const response = await validateToken(tokenLocal);
    console.log(response);
    
    if (!axios.isAxiosError(response)) {
      
      return {valid:true, response}
      
    } else {
        console.log('passei aqui');
        const result = await validateRefreshToken(tokenLocal, refreshTokenLocal);
        if (!axios.isAxiosError(result)) {
          const { refreshToken, token, expiresIn } = result!.data;
          window.localStorage.setItem("token", result && token);
          window.localStorage.setItem("refreshToken", result && refreshToken);
          window.localStorage.setItem("expiresIn", result && expiresIn);
          return { valid: true, response }
          
        } else {
          return {valid: false, response}
        }
      }
  }

  return {
    login,
    validateToken,
    disconnectLogin,
    validateRefreshToken,
    authorization
  };
};
