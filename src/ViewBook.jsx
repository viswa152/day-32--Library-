import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewBook() {
  let params = useParams();
  let [book, setBook] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let book = await axios.get(
      `https://631f097322cefb1edc40d739.mockapi.io/books/${params.bookno}`
    );
    setBook(book.data);
  };

  return (
    <div className="card" style={{ width: "25rem", height: "18rem" }}>
      <div className="mb-3 fw-bold fs-3 text-center">Book Details</div>
      <img src={`${book.avatar}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <b>Name: </b>
          {book.name}
        </h5>
        <p className="card-text">
          <b style={{ color: "blue" }}>Id: </b> {book.bookid}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Genre: </b> {book.genre}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Author: </b> {book.author}
        </p>
        <p className="card-text">
          <b style={{ color: "blue" }}>Published-Year: </b> {book.year}
        </p>
        <Link to={"/books"} className="btn btn-primary mx-2">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ViewBook;
