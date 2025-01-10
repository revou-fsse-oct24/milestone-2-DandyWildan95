// src/components/ProductList.tsx
import React from 'react';
import ProductItem from './ProductsItem';

interface ProductListProps {
  products: Array<{ id: number; name: string; price: number; }>;
  addToCart: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
