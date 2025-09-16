import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";
import { Item } from "../types/item";
import SkeletonCard from "./ProductCardSkeleton";

interface ProductGridProps {
  items: Item[];
  loading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  items,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="content-grid">
        {Array.from({ length: 4 }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

    );
  }

  if (!items.length) {
    return <p className="content-grid__empty">No items to display.</p>;
  }

  return (
    <div className="content-grid">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
