import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { incrementPage } from "../store/filtersSlice";
import { getAllItems } from "../api/fetchItems";

import NavBar from "../components/NavBar/NavBar";
import KeywordSearch from "../components/FilterBar/KeywordSearch";
import PricingOptions from "../components/FilterBar/PricingOptions";
import PriceRangeFilter from "../components/FilterBar/PriceRangeFilter";
import ResetButton from "../components/FilterBar/ResetButton";
import ProductGrid from "../components/ProductGrid";
import InfiniteScroller from "../components/InfiniteScroller";
import SortDropdown, { SortOption } from "../components/FilterBar/SortDropdown";

import "../styles/StorePage.css";
import { Item } from "../types/item";
import { useFiltersSync } from "../hooks/useFiltersSync";
import { fetchAllProducts } from "../store/productsSlice";

const PAGE_SIZE = 20;

const StorePage: React.FC = () => {
  useFiltersSync()
  const dispatch = useDispatch<AppDispatch>();
  const { pricingOptions, searchTerm, page, priceRange } = useSelector(
    (state: RootState) => state.filters
  );
  const { allItems, isLoading, error } = useSelector((state: RootState) => state.products)
  const [activeCat, setActiveCat] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");
 
  // Fetch data once on mount
  useEffect(() => {
   dispatch(fetchAllProducts() as any);
  }, []);

  // Apply filters
  const filtered = useMemo(() => {
    return allItems.filter((item) => {
      // pricing filter
      const { paid, free, viewOnly } = pricingOptions;
      if (paid || free || viewOnly) {
        if (item.pricing === "paid" && !paid) return false;
        if (item.pricing === "free" && !free) return false;
        if (item.pricing === "viewOnly" && !viewOnly) return false;
      }
      // search term
      const term = searchTerm.trim().toLowerCase();
      if (term) {
        if (
          !item.title.toLowerCase().includes(term) &&
          !item.userName.toLowerCase().includes(term)
        ) {
          return false;
        }
      }
      // category filter
      if (activeCat !== "All" && (item as any).category !== activeCat) {
        return false;
      }
      // price range filter
      if (item.price != null) {
        if (item.price < priceRange.min || item.price > priceRange.max) {
          return false;
        }
      }
      return true;
    });
  }, [allItems, pricingOptions, searchTerm, activeCat, priceRange]);

  // Sort
  const sorted = useMemo(() => {
    const copy = [...filtered];
    switch (sortBy) {
      case "priceDesc":
        copy.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "priceAsc":
        copy.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "name":
      default:
        copy.sort((a, b) => a.title.localeCompare(b.title));
    }
    return copy;
  }, [filtered, sortBy]);

  // Paginate
  const paginatedItems = useMemo(
    () => sorted.slice(0, page * PAGE_SIZE),
    [sorted, page]
  );

  const hasMore = paginatedItems.length < filtered.length;
  const loadMore = () => hasMore && dispatch(incrementPage());

  return (
    <>
      <NavBar />

      <div className="search-section container">
        <KeywordSearch />
      </div>
      <div className="container">
        <section className="filter-section">
          <div className="filter-bar">
            <PricingOptions />
            <PriceRangeFilter />
            <ResetButton />
          </div>
        </section>
      </div>
      <div className="container">
      <SortDropdown value={sortBy} onChange={(newSort) => setSortBy(newSort)} />
      </div>
      <section className="grid-section container">
        <InfiniteScroller hasMore={hasMore} loadMore={loadMore}>
          <ProductGrid items={paginatedItems} loading={isLoading} />
        </InfiniteScroller>
      </section>
    </>
  );
};

export default StorePage;
