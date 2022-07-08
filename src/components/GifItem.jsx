import { GifModal } from "./GifModal";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card col-12 col-sm-2">
      <img className="card-img" src={url} alt="gif" />
      <p>{title}</p>
      <GifModal title={title} url={url} />
    </div>
  );
};
