import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ getQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.searchInput.value.trim();

    if (!value) {
      toast.error("Please, fill the field");
      return;
    }

    getQuery(value);

    e.target.reset();
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          className={css.formInput}
        />
        <button type="submit" className={css.submitBtn}>
          Search
          <FiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
