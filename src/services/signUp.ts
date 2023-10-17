import api from "./api";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

export default async function signUp(body: ISignUpInput) {
  const response = await api.post("/auth/register", body);
  console.log(response.data);
}
