import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({ product }) => {
  if (!product) return null;

  return (
    <div className="mt-6 card p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image rounded-lg border"
        />
        {product.images?.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i + 1}`}
                className="w-24 h-24 object-cover rounded-md border hover:scale-105 transition-transform"
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <h1 className="text-2xl card-title">{product.title}</h1>
        <p className="muted mt-2">{product.description}</p>

        <div className="mt-4 space-y-2">
          <div>
            <span className="font-medium">Brand:</span> <span className="muted">{product.brand}</span>
          </div>
          <div>
            <span className="font-medium">Category:</span> <span className="muted">{product.category}</span>
          </div>
          <div className="flex items-baseline gap-3">
            <div className="text-2xl font-bold">${product.price}</div>
            <div className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium">{product.rating} ★</div>
          </div>
          {product.stock !== undefined && (
            <div>
              <span className="font-medium">In stock:</span> <span className="muted">{product.stock}</span>
            </div>
          )}
        </div>

        {/* ADD TO CART */}
        <AddToCartButton item={product} className="mt-6" />
      </div>
    </div>
  );
};

export default ProductDetails;
