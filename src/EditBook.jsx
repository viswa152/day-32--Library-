import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "./UserContext";

function EditBook() {
  const navigate = useNavigate();
  let params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      bookid: "",
      genre: "",
      author: "",
      year: "",
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
        `https://631f097322cefb1edc40d739.mockapi.io/books/${params.bookno}`,
        values
      );
      alert("Book edited");
      navigate("/books");
    },
  });
  useEffect(() => {
    loadbook();
  }, []);

  let loadbook = async () => {
    try {
      let book = await axios.get(
        `https://631f097322cefb1edc40d739.mockapi.io/books/${params.bookno}`
      );
      formik.setValues({
        name: book.data.name,
        bookid: book.data.bookid,
        genre: book.data.genre,
        author: book.data.author,
        year: book.data.year,
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
            <label>Book-Name</label>
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
            <label>Book-id</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.bookid}
              onChange={formik.handleChange}
              name="bookid"
            />
            <span style={{ color: "red" }}>{formik.errors.bookid}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Genre</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.genre}
              onChange={formik.handleChange}
              name="genre"
            />
            <span style={{ color: "red" }}>{formik.errors.genre}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Author</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.author}
              onChange={formik.handleChange}
              name="author"
            />
            <span style={{ color: "red" }}>{formik.errors.author}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Published-year</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.year}
              onChange={formik.handleChange}
              name="year"
            />
            <span style={{ color: "red" }}>{formik.errors.year}</span>
          </div>

          <div className="col-lg-12 mt-4">
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

export default EditBook;
