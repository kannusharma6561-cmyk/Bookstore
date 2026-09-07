import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";

import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites"; 
import Profile from "./pages/Profile"; 
import {Link} from "react-router-dom";
import Footer from "./components/Footer";



function App() {
  return(
    <AuthProvider>
    <FavoritesProvider>
    <div>
      <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/books" element={<AllBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    <Footer />
    </div>
    </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;