<<<<<<< HEAD
 // CategoryFilter.js
=======
// CategoryFilter.js
>>>>>>> ad046be818b8b0dfc2368f87960dcd28c8e086db
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