import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-danger mt-5 mb-5 fw-bolder">
        404 <br />
        Page Not Found
      </h2>
      <Link
        to="/"
        className=""
        style={{ textDecoration: "none", color: "seagreen" }}
      >
        <div className="d-flex justify-content-center align-items-center text-center container mx-auto mt-5 mb-5 w-75">
          <h2>Back to home page</h2>

          <ion-icon
            style={{ fontSize: 32, margin: 20 }}
            name="arrow-forward-outline"
          ></ion-icon>

          <span className="">
            <ion-icon style={{ fontSize: 32 }} name="home-outline"></ion-icon>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
