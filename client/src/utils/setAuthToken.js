import axios from "axios";

// Adding global headers
const setAuthToken = token => {
  // If there is token in local storage then set global header
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
export default setAuthToken;
