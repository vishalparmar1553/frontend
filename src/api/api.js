import axios from "axios";
const local = "http://localhost:5000";
const production = process.env.REACT_APP_API_BACKEDN;
const api = axios.create({
  baseURL: `${production}/api`,
});

export default api;
