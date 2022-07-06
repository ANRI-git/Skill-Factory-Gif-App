import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleSearch = (value) => {
    if (value < 1) return;
    setCategories([value, ...categories]);
  };

  const handleReset = () => {
    setCategories([]);
  };

  return (
    <>
      <div className="header text-center">
        <h1 className="fs-1">Gif App</h1>
        <h2 className="fs-6">All the gifs you want on the same place!</h2>
      </div>
      {/* Añadir categoría */}
      <AddCategory
        addCategory={handleSearch}
        removeCategories={handleReset}
        categoriesList={categories}
      />
      {/* mostrar gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
