import React from "react";
import useAuth from "../../hooks/useAuth";
import Show from "../Show/Show";
import "./Shows.css";

const Shows = () => {
  const { shows } = useAuth();

  return (
    <div className="container mt-5">
      <h1
        className="text-center mb-5"
        style={{ color: "seagreen", fontWeight: 600 }}
      >
        All Movie Shows
      </h1>
      <div className="row">
        {shows.map((show) => (
          <Show key={show.show.id} show={show}></Show>
        ))}
      </div>
    </div>
  );
};

export default Shows;
