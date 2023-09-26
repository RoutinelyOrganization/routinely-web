import { ISingInProps } from "../pages/SignInPage/Index";
import instance from "./api";
import { AxiosError } from "axios";

export async function login(data: ISingInProps) {
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
    console.log(erro.message);
  }
}
