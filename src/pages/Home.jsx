import { Link } from "react-router-dom";
import books from "../data/Books";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Your Next <span>Favorite Book</span></h1>
          <p>Explore a wide collection of books from various genres.</p>
          <Link to="/books">
            <button className="explore-btn">Explore Books</button>
          </Link>
        </div>
      </section>

      <section className="popular-books">
        <div className="section-header">
          <h2>Popular Books</h2>
          <Link to="/books">View All</Link>
        </div>

        <div className="book-grid">
          {books.slice(0,8).map((book) => (
            <Link to={"/book/${book.id}"} key={book.id}>
            <div className="book-card" key={book.id}>
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
      </section>
    </div>
  );
}


export default Home;