import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <div className={css.galleryImgWrapper}>
      <img
        src={photo.urls.small}
        alt={photo.description}
        className={css.galleryImg}
      />
    </div>
  );
};

export default ImageCard;
