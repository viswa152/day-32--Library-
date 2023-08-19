import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BorrowBook() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      bookname: "",
      membername: "",
      bookid: "",
      memberid: "",
      borroweddate: "",
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
      await axios.post(
        "https://631f097322cefb1edc40d739.mockapi.io/borrow",
        values
      );
      alert("Book Borrowed");
      navigate("/");
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label>Book-Name</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.bookname}
              onChange={formik.handleChange}
              name="bookname"
            />
            <span style={{ color: "red" }}>{formik.errors.bookname}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Member-Name</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.membername}
              onChange={formik.handleChange}
              name="membername"
            />
            <span style={{ color: "red" }}>{formik.errors.membername}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Book-Id</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.bookid}
              onChange={formik.handleChange}
              name="bookid"
            />
            <span style={{ color: "red" }}>{formik.errors.bookid}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Member-Id</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.memberid}
              onChange={formik.handleChange}
              name="memberid"
            />
            <span style={{ color: "red" }}>{formik.errors.memberid}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Borrowed-Date</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.borroweddate}
              onChange={formik.handleChange}
              name="borroweddate"
            />
            <span style={{ color: "red" }}>{formik.errors.borroweddate}</span>
          </div>

          <div className="col-12 mt-2">
            <input
              className=" btn btn-warning"
              type={"submit"}
              value="Borrow"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BorrowBook;
