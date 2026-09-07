import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { favorites } = useFavorites();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <div>
          <h2>Kannu Sharma</h2>
          <p>ghanshyamsharma@gmail.com</p>
        </div>
      </div>

      <div className="profile-links">
        <Link to="/favorites" className="profile-link">
          ♡ My Favorites ({favorites.length})
        </Link>
        <button className="profile-link logout-btn" onClick={handleLogout}>
          ⏻ Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;