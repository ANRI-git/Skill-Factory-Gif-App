import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { CategoryButtons } from "./CategoryButtons";

export const AddCategory = ({
  addCategory,
  removeCategory,
  resetCategories,
  categoriesList,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() < 1) return;
    addCategory(inputValue.trim());
    setInputValue("");
  };

  const handleResetCategories = () => {
    setInputValue("");
    resetCategories();
  };

  const handleRemoveCategory = (index) => {
    removeCategory(index);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit} className="container">
      <div className="row justify-content-center">
        <input
          className="col-12 col-sm-6"
          type="search"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="col-12 col-sm-3 my-2 row justify-content-evenly">
          <button className="col btn outline-pink">Search</button>
          <button
            aria-label="reset"
            className="col btn outline-pink"
            onClick={handleResetCategories}
          >
            Reset
          </button>
        </div>
      </div>
      <div>
        <CategoryButtons
          categoriesList={categoriesList}
          removeCategory={handleRemoveCategory}
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
  resetCategories: PropTypes.func.isRequired,
  categoriesList: PropTypes.array.isRequired,
};
