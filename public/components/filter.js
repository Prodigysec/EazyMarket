 // CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      {/* Dropdown menu to filter products by category */}
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {/* Generate options for each category */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;