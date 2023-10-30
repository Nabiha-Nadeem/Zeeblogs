import React from 'react';
import FavoriteIcon from '../FavoriteIcon';
import './ArticleTable.css'; 


const ArticleCard = ({ title, content, isFavorite, onToggleFavorite }) => {
  return (
    <table className="article-table">
      <tbody>
        <tr className="article-row">
          <td className="article-cell">
            <h2>{title}</h2>
            <p>{content}</p>
          </td>
          <td className="favorite-cell">
            {onToggleFavorite && (
              <FavoriteIcon isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ArticleCard;
