import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles, selectedCategory, onToggleFavorite, favorites = [], categories}) => {
  const filteredArticles = articles.filter(article =>
    selectedCategory ? article.categoryID == selectedCategory : true
  );

  return (
    <div>
      {filteredArticles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.content}
          isFavorite={favorites.includes(article.id)}
          onToggleFavorite={() => onToggleFavorite(article.id)}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
