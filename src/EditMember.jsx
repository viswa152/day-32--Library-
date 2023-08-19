import { useFormik } from "formik";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMember() {
  let params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      userid: "",
      age: "",
      address: "",
      Phone: "",
      email: "",
    },
    validate: (values) => {
      let errors = {};
      for (let keys in values) {
        if (values[keys] === "") {
          errors[keys] = `Please Enter ${keys}`;
        }
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://631f097322cefb1edc40d739.mockapi.io/members/${params.userno}`,
        values
      );
      alert("Member edited");
      navigate("/members");
    },
  });

  useEffect(() => {
    loadmember();
  }, []);

  let loadmember = async () => {
    try {
      let member = await axios.get(
        `https://631f097322cefb1edc40d739.mockapi.io/members/${params.userno}`
      );
      formik.setValues({
        name: member.data.name,
        userid: member.data.userid,
        age: member.data.age,
        address: member.data.address,
        Phone: member.data.Phone,
        email: member.data.email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label>Member-Name</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Member-id</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.userid}
              onChange={formik.handleChange}
              name="userid"
            />
            <span style={{ color: "red" }}>{formik.errors.userid}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Age</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Address</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.address}
              onChange={formik.handleChange}
              name="address"
            />
            <span style={{ color: "red" }}>{formik.errors.address}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Phone</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.Phone}
              onChange={formik.handleChange}
              name="Phone"
            />
            <span style={{ color: "red" }}>{formik.errors.Phone}</span>
          </div>
          <div className="col-lg-6 mt-2 ">
            <label>E-mail</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <input
              className=" btn btn-primary"
              type={"submit"}
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditMember;
