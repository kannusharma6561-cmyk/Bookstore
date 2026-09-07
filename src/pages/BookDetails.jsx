import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import { useFavorites } from "../context/FavoritesContext";

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!book) return <h2>Book not found</h2>;

  const favorite = isFavorite(book.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <div className="book-details-page">
      <Link to="/books">← Back</Link>

      <div className="details-container">
        <img src={book.cover} alt={book.title} className="details-cover" />

        <div className="details-info">
          <h1>{book.title}</h1>
          <p className="author">{book.author}</p>
          <span>⭐ {book.rating}</span>

          <button className="fav-btn" onClick={handleFavoriteClick}>
            {favorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;