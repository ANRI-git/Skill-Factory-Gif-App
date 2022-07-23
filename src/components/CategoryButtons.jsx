import React from "react";
import PropTypes from 'prop-types';

export const CategoryButtons = ({ categoriesList, removeCategory }) => {
  return (
    <>
      {categoriesList.map((category, index) => (
          <button className="btn outline-purple" key={index}>
            <div className="d-flex align-items-center">
              <span data-testid="category-button" className="w-100">{category}</span>
              <a className="btn-close flex-shrink-1" onClick={() => removeCategory(index)}></a>
            </div>
          </button>
        ))}
    </>
  );
};

CategoryButtons.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  removeCategory: PropTypes.func.isRequired
}