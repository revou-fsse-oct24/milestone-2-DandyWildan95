// src/components/Product/ProductDetail.tsx
// src/components/Product/ProductDetail.tsx
import React from 'react';
import { Product } from '../../../types/Product';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => (
  <div>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
);

export default ProductDetail;