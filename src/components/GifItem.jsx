import PropTypes from "prop-types";
import { GifModal } from "./GifModal";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card col-12 col-sm-2">
      <img className="card-img" src={url} alt="gif" />
      <p data-testid="test-title">{title}</p>
      <GifModal title={title} url={url} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
