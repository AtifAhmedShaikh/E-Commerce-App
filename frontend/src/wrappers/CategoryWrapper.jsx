import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { wrapper, wrapperBox } from "../styles/SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByCategories } from "../utils/filters";
import {
  addActiveFilter,
  removeActiveFilter,
  updateProducts,
} from "../store/slice/slice";
import { fetchProducts } from "../services/products";
import Loader from "../components/Loader";

const CategoryWrapper = () => {
  const categories = useSelector((state) => state.categories);
  const activeFilters = useSelector((state) => state.activeFilters);
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([...categories]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => setSearchResult(categories), [categories]);
  //update the products in store according active filters of categories
  useEffect(() => {
    (async ()=>{
      const response = await fetchProducts();
      const filteredProducts = await filterProductsByCategories(response.data, activeFilters);
      dispatch(updateProducts({ products: filteredProducts }));
      console.log("access filters....")
    })();
  }, [activeFilters, dispatch])
  // handle filters to filter the products by category
  const handleFilter = async (status, category) => {
    //If status is true mean add this category in active filters otherwise remove the filter from active filters
    if (status) {
      dispatch(addActiveFilter({ filter: category }));
    } else {
      dispatch(removeActiveFilter({ filter: category }));
    }
  };

  // handle the search Input so search or filter the categories
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    const filtered = categories.filter((item) =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(filtered);
  };
  return (
    <div className={wrapper}>
      <h5>Categories</h5>
      <Form.Control
        size="sm"
        className="searchInput"
        type="text"
        placeholder="Search Category..."
        onChange={(e) => handleSearchInput(e)}
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
      {searchResult.length === 0&&<Loader size="sm"/>}
      {searchResult.length === 0 && searchInput.length >= 1 && (
        <p className="text-center search-error-message">
          category not found...
        </p>
      )}
    </div>
  );
};

export default CategoryWrapper;
