import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = props => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  return (
    <div className="row">
      <div className="text-center col-md-6 col-lg-4 mx-auto">
        <div className="card card-body">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Register Account</h1>
            {/* Full Name */}
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Full Name"
              required
              autoFocus
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            {/* Email */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control my-2"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {/* Password */}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {/* Quote */}
            <label htmlFor="favourite-quote" className="sr-only">
              Your Favourite Quote
            </label>
            <input
              type="text"
              id="favourite-quote"
              className="form-control my-2"
              placeholder="Quote"
              required
              value={quote}
              onChange={e => setQuote(e.target.value)}
            />

            <button className="btn btn-danger btn-block mt-3" type="submit">
              Register
            </button>
            <Link to="/login" className="btn btn-success btn-block">
              Sign in
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

export default Register;
