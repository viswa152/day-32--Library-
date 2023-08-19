import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewMember() {
  let params = useParams();
  let [member, setMember] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let member = await axios.get(
      `https://631f097322cefb1edc40d739.mockapi.io/members/${params.userno}`
    );
    setMember(member.data);
  };

  return (
    <div className="card" style={{ width: "25rem", height: "18rem" }}>
      <div className="mb-3 fw-bold fs-3 text-center">Member Details</div>
      <img src={`${member.avatar}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <b>Name: </b>
          {member.name}
        </h5>
        <p className="card-text">
          <b style={{ color: "blue" }}>Id: </b> {member.userid}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Age: </b> {member.age}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Address: </b> {member.address}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Phone: </b> {member.Phone}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>E-mail: </b> {member.email}
        </p>
        <Link to={"/members"} className="btn btn-primary mx-2">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ViewMember;
