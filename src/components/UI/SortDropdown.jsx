import React from 'react';

const SortDropdown = ({ sortOption, onSort }) => {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <label htmlFor='sort'>Sort By: </label>
      <select id='sort' value={sortOption} onChange={handleSort}>
        <option value='best-match'>Best Match</option>
        <option value='popularity'>Popularity</option>
        <option value='high-to-low'>Price: high to low</option>
        <option value='low-to-high'>Price: low to high</option>
        <option value='top-rated'>Top Rated</option>
      </select>
    </div>
  );
};

export default SortDropdown;
