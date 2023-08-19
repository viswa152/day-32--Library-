import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Members() {
  let context = useContext(UserContext);
  let [count, setCount] = useState(0);
  let [members, setmembers] = useState([]);
  let [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setmembers(members);
  }, [count]);

  let loadData = async () => {
    try {
      setLoading(true);
      let members = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/members"
      );
      setmembers(members.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let memberDelete = async (id) => {
    try {
      await axios.delete(
        `https://631f097322cefb1edc40d739.mockapi.io/members/${id}`
      );
      let deleteIndex = members.findIndex((member) => {
        return member.id === id;
      });
      members.splice(deleteIndex, 1);
      setCount((c) => c + 1);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Members</h1>
        <Link
          to="/create-member"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Member
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All members</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Member-id</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Member-id</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                  </tr>
                </tfoot>
                <tbody>
                  {members.map((member, index) => {
                    return (
                      <tr key={member.id}>
                        <td>{index + 1}</td>
                        <td>{member.name}</td>
                        <td>{member.userid}</td>
                        <td>{member.age}</td>
                        <td>{member.address}</td>
                        <td>{member.Phone}</td>
                        <td>{member.email}</td>
                        <td>
                          <Link
                            to={`/members/view-member/${member.id}`}
                            className="btn btn-primary mx-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/members/edit-member/${member.id}`}
                            className="btn btn-warning mx-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => memberDelete(member.id)}
                            className="btn btn-danger mx-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
