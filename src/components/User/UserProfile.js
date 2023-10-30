import React from 'react';
import ArticleCard from '../Article/ArticleCard';

const UserProfile = ({ username, favoriteArticles, onToggleFavorite, favorites }) => {
  return (
    <div>
      <h2>{username}'s Profile</h2>
      <h3>Favorited Articles</h3>
      {favoriteArticles.length > 0 ? (
        favoriteArticles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.content}
            isFavorite={favorites.includes(article.id)}
            onToggleFavorite={() => onToggleFavorite(article.id)}
          />
        ))
      ) : (
        <p>No favorite articles yet.</p>
      )}
    </div>
  );
};

export default UserProfile;
