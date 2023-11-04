import api from "./api";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

export default async function signUp({ name, email, password, acceptedTerms }: ISignUpInput) {
   try {
    const response = await api.post("/auth/register", { name, email, password, acceptedTerms });
  return response;
   } catch (error) {
      console.log(error)
   }
}
