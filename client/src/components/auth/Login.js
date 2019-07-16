import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
    console.log(formData);
  };

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

export default Login;
