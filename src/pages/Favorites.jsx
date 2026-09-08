import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import "./Favorites.css";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <h2 className="empty-favorites">No favorite books yet.</h2>;
  }

  return (
    <div className="favorites-page">
      <h1>My Favorite Books</h1>

      <div className="book-grid">
        {favorites.map((book) => (
          <div className="book-card" key={book.id}>
            <Link to={`/book/${book.id}`}>
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <span>⭐ {book.rating}</span>
            </Link>
            <button className="remove-btn" onClick={() => removeFavorite(book.id)}>
              🗑️ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;