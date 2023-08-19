import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ data }) {
  return (
    <div
      className="card col-lg-3 mx-5 my-3"
      style={{ width: "18rem", backgroundColor: `${data.color}` }}
    >
      <div className="row container">
        <div className="col-6 mt-4">
          <h1>{data.count}</h1>
          <div className="fw-bold fs-5">{data.title}</div>
        </div>
        <div className="col-6 text-center">
          <FontAwesomeIcon
            className="mt-3 mx-2"
            icon={`${data.icon}`}
            size="5x"
            color="#002B5B"
          />
        </div>
        <div className="col-12 text-center mt-3 fs-5 "> More options...</div>
      </div>
    </div>
  );
}

export default Card;
