import axios from "axios";

const instance = axios.create({
  baseURL: "https://eunhjxzv6b.execute-api.us-east-1.amazonaws.com",
});

export default instance;
