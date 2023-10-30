import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ArticlesList from './components/Article/ArticlesList';
import FavoritesTab from './components/FavoritesTab';
import LoginForm from './components/User/LoginForm';
import SignupForm from './components/User/SignupForm';
import UserProfile from './components/User/UserProfile';

function App() {

  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (loginUsername) => {
    console.log(`${loginUsername} logged in`);
    setUsername(loginUsername);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log('Logged out');
    setUsername(null);
    setIsLoggedIn(false);
  };

  // Dummy data
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Dark humor" },
  ];

  const articles = [
    { id: 1, title: "Article 1", content: "Content of article 1.", categoryID: 1 },
    { id: 2, title: "Article 2", content: "Content of article 2.", categoryID: 2 },
    { id: 3, title: "Article 3", content: "Content of article 3.", categoryID: 3 },
  ];

  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (articleId) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(articleId)
        ? prevFavorites.filter(id => id !== articleId)
        : [...prevFavorites, articleId]
    );
  };

  const favoriteArticles = articles.filter(article => favorites.includes(article.id));
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <div>
        <Navbar categories={categories} onSelectCategory={setSelectedCategory} />
        <Routes>
          <Route path="/" element={<ArticlesList articles={articles} selectedCategory={selectedCategory} onToggleFavorite={handleToggleFavorite} favorites={favorites} categories={categories}/>} />
          <Route path="/favorites" element={<FavoritesTab favoriteArticles={favoriteArticles} onToggleFavorite={handleToggleFavorite} favorites={favorites} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm onSignup={handleLogin} />} />
          <Route path="/profile" element={<UserProfile username={username} favoriteArticles={favoriteArticles} onToggleFavorite={handleToggleFavorite} favorites={favorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
