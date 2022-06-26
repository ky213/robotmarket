import axios from "axios";

import { SERVER_URL, TIMEOUT } from "./constants";

export default axios.create({
  baseURL: SERVER_URL,
  timeout: TIMEOUT,
});
