import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={css.loadMoreBtnWrapper}>
      <button type="button" className={css.loadMoreBth}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
