// import ImageGallery from "./ components/ImageGallery/ImageGallery";
import ErrorMessage from "./ components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./ components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./ components/Loader/Loader";
import SearchBar from "./ components/SearchBar/SearchBar";

function App() {
  const getQuery = (value) => {
    console.log("validValue:", value);
  };

  return (
    <>
      <SearchBar getQuery={getQuery} />
      {/* <ImageGallery /> */}
      <ErrorMessage />
      <Loader />
      <LoadMoreBtn />
    </>
  );
}

export default App;
