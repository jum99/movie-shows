import React from "react";
import { Link } from "react-router-dom";
import "./Show.css";

const Show = (props) => {
  const { id, image, name, summary } = props.show.show;

  return (
    <div className="col-md-4 mt-3 d-flex justify-content-around">
      <div className="card mb-3">
        <div className="d-flex justify-content-center">
          <img
            src={image?.original}
            className="img-fluid p-3"
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </div>

        <div className="card-body">
          <h4 className="card-title"> Movie Name: {name}</h4>
          <p className="card-text">{summary.slice(0, 95)}......</p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/showDetails/${id}`}>
              {" "}
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
