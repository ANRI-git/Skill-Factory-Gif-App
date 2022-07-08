import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  
  const {gifs, loading} = useFetchGif(category);

  return (
    <>
      <h3>Gifs found with '{category}':</h3>
      <div className="card-grid row">
        {loading ? (
            <h2 className="text-center my-5">Loading GIFS...</h2>
        ) : (
          gifs.map((img) => <GifItem key={img.id} {...img} />)
        )}
      </div>
    </>
  );
};
