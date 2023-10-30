import React from 'react';
import CategoryFilter from '../Category/CategoryFilter';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = ({ categories, onSelectCategory, isLoggedIn, username, handleLogout }) => {
  return (
    <nav>
      <h1>ZeeBlogs</h1>
      <div className="categories">
      <CategoryFilter categories={categories} onSelectCategory={onSelectCategory} />
      <div className="links">
        {isLoggedIn ? (
          <>
            <Link to="/favorites" className="nav-link">My Favorites</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
      </div>
      </div>
      {isLoggedIn && <div>Welcome, {username}!</div>}
    </nav>
  );
};

export default Navbar;
