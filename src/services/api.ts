// src/services/api.ts

const BASE_URL = 'https://api.example.com';

export const fetchProducts = async (): Promise<any> => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export const fetchProductDetails = async (productId: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product details');
    }
    return response.json();
};
