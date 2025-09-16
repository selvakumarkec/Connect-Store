import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { setSearchTerm } from "../../store/filtersSlice";
import { useDebounce } from "../../hooks/useDebounce"; // <-- import hook
import "../../styles/KeywordSearch.css";

export default function KeywordSearch() {
  const dispatch = useDispatch<AppDispatch>();
  const currentTerm = useSelector((s: RootState) => s.filters.searchTerm);
  const [localTerm, setLocalTerm] = useState(currentTerm);

  // Apply debounce (400ms)
  const debouncedTerm = useDebounce(localTerm, 400);

  // Dispatch only when debounced value changes
  useEffect(() => {
    dispatch(setSearchTerm(debouncedTerm));
  }, [debouncedTerm, dispatch]);

  return (
    <div className="keyword-search">
      <input
        type="text"
        id="search-input"
        className="keyword-search__input"
        value={localTerm}
        onChange={(e) => setLocalTerm(e.target.value)}
        placeholder="Find the items you’re looking for"
      />
      <svg
        className="keyword-search__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M11 4a7 7 0 014.9 11.9l4.2 4.2-1.4 1.4-4.2-4.2A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
