import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setPriceRange } from "../../store/filtersSlice";
import "../../styles/PriceRangeOption.css";

const MIN = 0;
const MAX = 999;

export default function PriceRangeFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const { priceRange } = useSelector((s: RootState) => s.filters);
  const {min , max} = priceRange

  // Local state to allow both thumbs to move without stutter
  // const [localMin, setLocalMin] = useState(priceRange.min);
  // const [localMax, setLocalMax] = useState(priceRange.max);

  // When local values change, sync back to Redux (debounced if you like)
  // useEffect(() => {
  //   dispatch(setPriceRange({ min: localMin, max: localMax }));
  // }, [localMin, localMax, dispatch]);

  // Prevent crossing
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, max - 1);
    // setLocalMin(value);
    dispatch(setPriceRange({ min: value, max: max}))
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, min + 1);
    // setLocalMax(value);
     dispatch(setPriceRange({ min: min, max: value}))
  };

  return (
    <div className="price-range-filter">
      <input
        type="range"
        id="price-range-filter"
        className="slider slider--min"
        min={MIN}
        max={MAX}
        value={min}
        onChange={handleMinChange}
      />
      <input
        type="range"
        id="range-slider"
        className="slider slider--max"
        min={MIN}
        max={MAX}
        value={max}
        onChange={handleMaxChange}
      />
      <div className="price-range-filter__values">
        <span>${min}</span> – <span>${max}</span>
      </div>
    </div>
  );
}
