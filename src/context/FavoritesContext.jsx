import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    if (!favorites.find((b) => b.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((b) => b.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((b) => b.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}