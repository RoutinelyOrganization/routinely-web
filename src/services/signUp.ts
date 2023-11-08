import instance from "./api";
interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

export default async function signUp({ name, email, password, acceptedTerms }: ISignUpInput) {
  const response = await instance.post("/auth/register", { name, email, password, acceptedTerms });
  return response;
}