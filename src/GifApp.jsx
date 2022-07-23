import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { PageHeader } from "./components/PageHeader";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleSearch = (value) => {
    setCategories([value, ...categories]);
  };

  const handleReset = () => {
    setCategories([]);
  };

  const handleRemove = (index) => {
    setCategories(categories.filter((e, i) => i !== index));
  }

  return (
    <>
    {/* Muestra el header */}
      <PageHeader />
      {/* Añade buscador y botones  */}
      <AddCategory
        addCategory={handleSearch}
        resetCategories={handleReset}
        removeCategory={handleRemove}
        categoriesList={categories}
      />
      {/* muestra los gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
