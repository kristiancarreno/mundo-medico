import React from 'react'

function SearchBar() {
  return (
    <div className='flex items-center bg-gray-200 p-2 rounded-3xl lg:w-[417px]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 text-gray-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35'
        />
      </svg>

      <input
        type='text'
        placeholder='Buscar'
        className='ml-2 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 w-full'
      />
    </div>
  )
}

export default SearchBar
