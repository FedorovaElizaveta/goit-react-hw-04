import ImageGallery from "./ components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import ErrorMessage from "./ components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./ components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./ components/Loader/Loader";
import SearchBar from "./ components/SearchBar/SearchBar";
import getPhotosApi from "./api/photos-api";
// import ImageModal from "./ components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPhotosApi(query, page);
        setPhotos((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchData();
  }, [query, page]);

  const handleSubmit = async (value) => {
    setQuery(value);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar getQuery={handleSubmit} />
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {isLoading && <Loader />}
      {photos.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {/* {photos.length > 0 && <ImageModal modalImage={imageModalPhoto} />} */}
    </>
  );
}

export default App;
