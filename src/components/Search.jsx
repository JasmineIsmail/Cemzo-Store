import React from 'react'

const Search = () => {
  return (
    <div>
        <input className='rounded-l-lg border-gray-500 ml-4 mt-4 p-2' type='text' placeholder='Search'>
        </input>
        <button className='rouded-r-lg cursor-pointer border-gray-500' >Search</button>
    </div>
  )
}

export default Search