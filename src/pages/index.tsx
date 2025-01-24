// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = ({ data }) => (
  <div className="homepage">
    <h1>Welcome to Our Online Tobacco Store</h1>
    <p>Your trusted source for high-quality tobacco products.</p>
    <nav>
      <ul>
        <li><Link href="/products">Shop Now</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
    {/* Example usage of fetched data */}
    <div>
      <h2>Product List:</h2>
      <ul>
        {data.map((product: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; brand: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
          <li key={product.id}>{product.name} - {product.brand}</li>
        ))}
      </ul>
    </div>
  </div>
);

export async function getServerSideProps() {
  // Fetch data here and pass it as props to the component
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return { props: { data } };
}

export default HomePage;
