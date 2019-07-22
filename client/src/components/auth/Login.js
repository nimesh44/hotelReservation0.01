import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

// Destructuring for props.login inside parenthesis of Login
const Login = ({ login, isAuthenticated }) => {
  // formData is the state where the all the object properties are stored
  // setFormData is the function to change the object properties
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  //Destructuring
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // Preventing default submit
    e.preventDefault();
    login(email, password);
    console.log(formData);
  };

  // Redirectd if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div className="box-create">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
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
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/Register">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};
// login is prop so set propTypes
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

//
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
