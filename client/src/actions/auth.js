// To make request in backEnd
import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";
// load User
export const loadUser = () => async dispatch => {
  // Checking localstorage for token
  if (localStorage.token) {
    setAuthToken(localStorage.token); // calling function to set headers
    try {
      const res = await axios.get("/api/hotelAuth");
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Convert array to string to send into database
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/hotelusers", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    // Need to dispatch loadUser() action after register and login
    dispatch(loadUser());
  } catch (err) {
    // To display the errors during Registeration
    //  following constant stores errors
    const errors = err.response.data.errors;
    if (errors) {
      // To track and alert all errors forEach is used
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};



// Login User
export const login = (email, password ) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Convert array to string to send into database
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/hotelauth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    // To display the errors during Registeration
    //  following constant stores errors
    const errors = err.response.data.errors;
    if (errors) {
      // To track and alert all errors forEach is used
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / clear profile
export const logout =()=> dispatch =>{
  dispatch({ type: LOGOUT})
}