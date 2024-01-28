import axios from "axios";

const instance = axios.create({
  baseURL: "https://routinely-api-dev.onrender.com",
});

export default instance;
