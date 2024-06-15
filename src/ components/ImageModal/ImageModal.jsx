const ImageModal = ({ modalImage }) => {
  return <img src={modalImage.urls.regular} alt={modalImage.description} />;
};

export default ImageModal;
