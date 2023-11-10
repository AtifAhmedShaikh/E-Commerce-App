import Form from "react-bootstrap/Form";
import Loader from "../components/Loader";
import { useCallback, useState } from "react";
import { wrapper, wrapperBox } from "../styles/SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addActiveFilter, removeActiveFilter } from "../store/slice/slice";
import { searchCategories } from "../utils/helper";

const CategoryWrapper = () => {
  const categories = useSelector((state) => state.categories);
  const activeFilters = useSelector((state) => state.activeFilters);
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([...categories]);
  const [searchInput, setSearchInput] = useState("");

  useCallback(() => setSearchResult(categories), [categories]);
  // handle filters to add or remove this category in active filters according status
  const handleFilter = async (status, category) => {
    if (status) {
      dispatch(addActiveFilter({ filter: category }));
    } else {
      dispatch(removeActiveFilter({ filter: category }));
    }
  };

  return (
    <div className={wrapper}>
      <h5>Categories</h5>
      <Form.Control
        size="sm"
        className="searchInput mb-2"
        type="text"
        placeholder="Search Category..."
        onChange={(e) => searchCategories(e, setSearchInput, categories, setSearchResult)}
        value={searchInput}
      />
      {searchResult?.map((category, index) => {
        return (
          <div className={wrapperBox} key={index}>
            <input
              type="checkbox"
              id={category}
              onChange={(e) => handleFilter(e.target.checked, category)}
            />
            <label
              className={activeFilters.includes(category) ? "active" : ""}
              htmlFor={category}
            >
              {category}
            </label>
          </div>
        );
      })}
      {searchResult.length === 0&&searchInput.length <1 &&<Loader size="sm" fontSize="11px" label="loading categories..."/>}
      {searchResult.length === 0 && searchInput.length >= 1 && (
        <p className="text-center search-error-message">
          category not found...
        </p>
      )}
    </div>
  );
};

export default CategoryWrapper;
