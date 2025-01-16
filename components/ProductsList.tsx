import React from 'react';
import ProductItem from './ProductsItem';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
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
