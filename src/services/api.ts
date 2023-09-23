import axios from "axios";

const instance = axios.create({
  baseURL: "https://routinely-api-dev.onrender.com/",
});
export default instance;

// requições feitas por aqui com base no exemplo do Discord feito pela Day.