import React from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ShowDetails = () => {
  const { id } = useParams();

  const { shows } = useAuth();

  const selectedShow = shows.find((show) => show?.show.id === Number(id));

  return (
    <div className="container mx-auto mt-5 w-75">
      <h1 className="mb-5">
        Movie Show:{" "}
        <span style={{ color: "seagreen" }}>{selectedShow?.show.name}</span>
      </h1>
      <p className="mb-4">
        <span style={{ color: "seagreen", fontWeight: "bold", fontSize: 18 }}>
          Summary:
        </span>{" "}
        {selectedShow?.show.summary}
      </p>
      <Link to={`/BookingForm/${id}`}>
        <button>Book Ticket</button>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "seagreen" }}>
        <div className="d-flex align-items-center mt-5">
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

export default ShowDetails;
