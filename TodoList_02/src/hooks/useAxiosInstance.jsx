import axios from "axios";

const API_SERVER = "https://todo-api.frontendschool.shop/api";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000 * 10,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });

  return instance;
}

export default useAxiosInstance;
