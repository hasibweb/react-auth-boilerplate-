import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-4 m-auto mt-5 ">
        <div className="card">
          <div className="card-body">
            <i
              className="fa fa-smile-o text-warning text-center d-block fa-3x"
              aria-hidden="true"
            ></i>
            <h1 className="text-center mb-4">Hello Guest</h1>
            <Link to="/login" className="btn btn-info btn-block">
              Login
            </Link>
            <Link to="/Register" className="btn btn-danger btn-block">
              Register
            </Link>
            <Link to="/dashboard" className="btn btn-secondary btn-block">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
