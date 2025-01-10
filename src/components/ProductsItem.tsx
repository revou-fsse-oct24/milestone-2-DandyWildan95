// src/components/ProductItem.tsx
import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
  addToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
