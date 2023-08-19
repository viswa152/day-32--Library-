import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Books() {
  let context = useContext(UserContext);
  let [count, setCount] = useState(0);
  let [books, setbooks] = useState([]);
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setbooks(books);
  }, [count]);

  let loadData = async () => {
    try {
      setLoading(true);
      let books = await axios.get(
        "https://631f097322cefb1edc40d739.mockapi.io/books"
      );
      setbooks(books.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let bookDelete = async (id) => {
    try {
      await axios.delete(
        `https://631f097322cefb1edc40d739.mockapi.io/books/${id}`
      );
      let deleteIndex = books.findIndex((book) => {
        return book.id === id;
      });
      books.splice(deleteIndex, 1);
      setCount((c) => c + 1);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Books</h1>
        <Link
          to="/create-book"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Book
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All books</h6>
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
                    <th>book-id</th>
                    <th>Genre</th>
                    <th>Author</th>
                    <th>Published Date</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>book-id</th>
                    <th>Genre</th>
                    <th>Author</th>
                    <th>Published Date</th>
                  </tr>
                </tfoot>
                <tbody>
                  {books.map((book, index) => {
                    return (
                      <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.bookid}</td>
                        <td>{book.genre}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td>
                          <Link
                            to={`/books/view-book/${book.id}`}
                            className="btn btn-primary mx-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/books/edit-book/${book.id}`}
                            className="btn btn-warning mx-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => bookDelete(book.id)}
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

export default Books;
