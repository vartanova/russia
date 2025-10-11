import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center pb-12 sm:pb-3.5'>
      <img src="src\assets\__logo.svg" alt="logo" />
      <div className='flex gap-4'>
      <a className='cursor-pointer text-white text-lg font-[Inter] sm:text-2xl'>Ru</a>
      <a className='cursor-pointer text-white text-lg font-[Inter] sm:text-2xl'>En</a>
      </div>
    </div>
  )
}

export default Header
