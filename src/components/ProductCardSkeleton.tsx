import React from "react";
import "../styles/SkeletonCard.css";

const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card">
      {/* Image placeholder */}
      <div className="skeleton-card__img" />

      {/* Body */}
      <div className="skeleton-card__body">
        <div className="skeleton-card__text-group">
          <div className="skeleton-card__line short" />
          <div className="skeleton-card__line medium" />
        </div>
        <div className="skeleton-card__price" />
      </div>
    </div>
  );
};

export default SkeletonCard;
