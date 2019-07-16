import React, { Fragment, useState } from "react";
// Importing connect to connect react with redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// Importing actions
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

// // Included to send using react (1  section)
// import axios from "axios";

// const Register = () => { // Removed while using redux
// const Register = props => { //Destructuring to remove props
const Register = ({ setAlert }) => {
  // formData is the state where the all the object properties are stored
  // setFormData is the function to change the object properties
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  //Destructuring
  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // Preventing default submit
    e.preventDefault();
    // Checking if password match
    if (password !== password2) {
      // console.log("password do not match");
      // props.setAlert("Passwords do not match", "danger");// removed after destructuring
      setAlert("Passwords do not match", "danger");
    } else {
      console.log(formData);

      //   // Using  react (1 section)
      //   // In order to send data in to database
      //   const newUser = {
      //     name,
      //     email,
      //     password
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json"
      //       }
      //     };
      //     // To convert object in to strings to store in the database
      //     const body = JSON.stringify(newUser);
      //     // Posting in to back End
      //     const res = await axios.post("/api/hotelUsers", body, config);
      //     console.log(res.data);
      //   } catch (err) {
      //     console.error(err.response.data);
      //   }
    }
  };

  return (
    <Fragment>
      <div className="box-create">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="8"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              minLength="8"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(
  null,
  { setAlert }
)(Register);
