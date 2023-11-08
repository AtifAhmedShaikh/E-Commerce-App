import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../services/products";
import { updateCategories } from "../store/slice/slice";

function useInitializeCategories() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const response = await fetchCategories();
           dispatch(updateCategories({ categories: response.data?.categories }));
        })();
    }, [dispatch]);
}

export default useInitializeCategories;