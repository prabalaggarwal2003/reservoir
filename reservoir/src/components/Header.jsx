import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo.jsx'

function Header() {
  return (
    <header className='relative z-20'>
      <div className='flex flex-wrap p-8 justify-between'>
        <div>
          <Logo/>
        </div>
        <div>
          <SearchBar/>
        </div>
      </div>
    </header>
  )
}

export default Header