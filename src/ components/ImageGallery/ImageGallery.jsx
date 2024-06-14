import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
