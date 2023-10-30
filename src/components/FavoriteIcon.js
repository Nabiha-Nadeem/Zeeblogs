import React from 'react';

const FavoriteIcon = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};

export default FavoriteIcon;
