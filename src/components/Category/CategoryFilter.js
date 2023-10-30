import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <select className="custom-select" onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>

  );
};

export default CategoryFilter;
