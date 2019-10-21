import React from "react";
import { Link } from "react-router-dom";

const Dashboard = props => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="card card-body">
          <h2 className="text-center mb-4">Hello App</h2>

          <p className="lead">Quote goes here</p>

          <button className="btn btn-warning btn-block">Log Out</button>
          <Link to="/" className="btn btn-dark btn-block">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
