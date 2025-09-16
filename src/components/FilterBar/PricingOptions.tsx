import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setPricingOption } from "../../store/filtersSlice";
import "../../styles/PricingOptions.css";

const OPTIONS = [
  { key: "paid", label: "Paid" },
  { key: "free", label: "Free" },
  { key: "viewOnly", label: "View Only" },
] as const;

type OptionKey = (typeof OPTIONS)[number]["key"];

export default function PricingOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const pricing = useSelector(
    (state: RootState) => state.filters.pricingOptions
  );

  return (
    <div className="pricing-options">
     <span> Pricing Option </span> 
      {OPTIONS.map((opt) => (
        <label key={opt.key} className="pricing-options__label">
          <input
            type="checkbox"
            id={`checkbox-${opt.key}`}
            checked={pricing[opt.key as OptionKey]}
            onChange={(e) =>
              dispatch(
                setPricingOption({
                  option: opt.key as OptionKey,
                  value: e.target.checked,
                })
              )
            }
            className="pricing-options__checkbox"
          />
          <span className="pricing-options__text">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
