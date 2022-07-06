import React from "react";
import { useState } from "react";

export const AddCategory = ({
  addCategory,
  removeCategories,
  categoriesList,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory(inputValue.trim());
    setInputValue("");
  };

  const handleResetCategories = () => {
    setInputValue("");
    removeCategories();
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div  className="row justify-content-center">
        <input
          className="col-12 col-sm-6"
          type="search"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="col-12 col-sm-3 my-2 row justify-content-evenly">
          <button className="col btn btn-dark">Search</button>
          <button className="col btn btn-dark" onClick={handleResetCategories}>
            Reset
          </button>
        </div>
      </div>
      <div>
        {categoriesList.map((category, index) => (
          <button className="btn btn-outline pe-0" key={index}>
            {category}
            <button class="btn btn-close btn-secondary"></button>
          </button>
        ))}
      </div>
    </form>
  );
};
