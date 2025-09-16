// hooks/useFiltersSync.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../store/store";
import {
  setPricingOption,
  setSearchTerm,
  setPage,
  setPriceRange,
} from "../store/filtersSlice";

export function useFiltersSync() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  // ⬇️ On mount → restore Redux state from URL
  useEffect(() => {
    const searchTerm = searchParams.get("search") || "";
    if (searchTerm) dispatch(setSearchTerm(searchTerm));

    const page = parseInt(searchParams.get("page") || "1", 10);
    dispatch(setPage(page));

    const min = parseInt(searchParams.get("min") || "0", 10);
    const max = parseInt(searchParams.get("max") || "999", 10);
    dispatch(setPriceRange({ min, max }));

    (["paid", "free", "viewOnly"] as const).forEach((option) => {
      const value = searchParams.get(option);
      if (value !== null) {
        dispatch(
          setPricingOption({ option, value: value === "true" })
        );
      }
    });
  }, []);

  // ⬆️ Whenever Redux filters change → update URL
  useEffect(() => {
    const params: Record<string, string> = {};

    if (filters.searchTerm) params.search = filters.searchTerm;
    if (filters.page !== 1) params.page = String(filters.page);
    if (filters.priceRange.min !== 0)
      params.min = String(filters.priceRange.min);
    if (filters.priceRange.max !== 999)
      params.max = String(filters.priceRange.max);

    (["paid", "free", "viewOnly"] as const).forEach((option) => {
      if (filters.pricingOptions[option]) {
        params[option] = "true";
      }
    });

    setSearchParams(params, { replace: true });
  }, [filters]);
}
