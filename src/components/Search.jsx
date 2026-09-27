import React, { useState } from 'react';

const Search = ({ products }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchText(value);

    if (value.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className='relative ml-4 mt-4 w-80'>

      {/* Search box */}
      <div className='flex'>
        <input
          className='w-full rounded-l-lg border border-gray-400 p-2 outline-none'
          type='text'
          placeholder='Search products...'
          value={searchText}
          onChange={handleSearch}
        />

        <button
          className='rounded-r-lg bg-gray-500 px-4 text-white cursor-pointer'
        >
          Search
        </button>
      </div>

      {/* Search suggestions */}
      {searchText.trim() !== '' && (
        <div className='absolute z-10 w-full rounded-b-lg border border-gray-300 bg-white shadow-lg'>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className='cursor-pointer border-b p-3 hover:bg-gray-100'
              >
                {product.title}
              </div>
            ))
          ) : (
            <div className='p-3 text-gray-500'>
              No products found
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default Search;