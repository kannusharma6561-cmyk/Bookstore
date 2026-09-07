import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/Books";
import "./AllBooks.css";


function AllBooks() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-books-page">
      <h1>All Books</h1>

      <input
        type="text"
        placeholder="Search books..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <div className="book-card">
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <span>⭐ {book.rating}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;