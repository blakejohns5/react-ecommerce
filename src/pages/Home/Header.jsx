


import React from 'react'

function Header() {

  const title = 'Top-selling Sneakers';

  return (
    <>
      <div className='home-header col-12'>
        <h1>{title}</h1>
        <div className='home-header__img01 col-4'></div>
        <div className='home-header__img02 col-4'></div>
        <div className='home-header__img03 col-4'></div>
      </div>
    </>
  )
}

export default Header;