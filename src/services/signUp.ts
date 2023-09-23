import api from "./api";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

export default async function signUp({ name, email, password, acceptedTerms }: ISignUpInput) {
  const response = await api.post("/auth/register", { name, email, password, acceptedTerms });
  console.log(response.data);
  return response.data;
}
