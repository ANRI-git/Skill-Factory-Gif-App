import React from "react";

export const CategoryButtons = ({ categoriesList, removeCategory }) => {
  return (
    <>
      {categoriesList.map((category, index) => (
          <button className="btn outline-purple" key={index}>
            <div className="d-flex align-items-center">
              <span className="w-100">{category}</span>
              <a className="btn-close flex-shrink-1" onClick={() => removeCategory(index)}></a>
            </div>
          </button>
        ))}
    </>
  );
};
