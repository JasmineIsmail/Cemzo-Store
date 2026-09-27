import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/products';
import ProductCard from './ProductCard';
import Search from './Search';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = async () => {
      const result = await fetchProducts();
      const data = result.products;

      setProducts(data);
    };

    productsData();
  }, []);

  return (
    <>
      <Search products={products} />

      <div className='ml-3 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {products.length === 0 ? (
          <div>
            <h1>Loading....</h1>
          </div>
        ) : (
          products.map((p) => (
            <ProductCard info={p} key={p.id} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductContainer;