export const getGifs = async (category) => {
  const API_KEY = "2SW6hbyH0UB2tl0hi1aRv46rfXChtPy2";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&lang=en`;

  const resp = await fetch(url);

  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));
  return gifs;
};
