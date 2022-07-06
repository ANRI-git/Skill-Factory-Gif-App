import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setloading] = useState(true);

  const getNewGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setloading(false);
  };

  useEffect(() => {
    getNewGifs();
  }, []);

  return {
    gifs,
    loading
  }
};
