import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  
  const {gifs, loading} = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          gifs.map((img) => <GifItem key={img.id} {...img} />)
        )}
      </div>
    </>
  );
};
