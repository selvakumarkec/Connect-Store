import React from "react";
import "../styles/ProductCard.css";
import { Item } from "../types/item";



interface ProductCardProps {
  item: Item;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const priceLabel =
    item.pricing === "free"
      ? "FREE"
      : item.pricing === "viewOnly"
      ? "View Only"
      : `$${item.price?.toFixed(2) || "0.00"}`;

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="product-card__img"
            loading="lazy"
          />
        ) : (
          <div className="product-card__img-placeholder" />
        )}
      </div>

      <div className="product-card__body">
        <div>
        <p className="product-card__creator">{item.userName}</p>
        <p className="product-card__title">{item.title}</p>
        </div>
        <div className="product-card__title-price">
          <p className="product-card__price">{priceLabel}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
