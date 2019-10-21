import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="row">
      <div className="text-center col-md-6 col-lg-4 mx-auto">
        <div className="card card-body">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control my-2"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-success btn-block" type="submit">
              Sign in
            </button>
            <Link to="/register" className="btn btn-danger btn-block">
              Register
            </Link>
            <Link to="/" className="btn btn-primary btn-block">
              Back To Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
