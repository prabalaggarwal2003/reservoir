import React from 'react'
import { Link } from 'react-router'

function Logo() {
  return (
    <>
    <Link to='/'>
    <img src="/webicon.png" alt="website logo" className='h-8' />
    </Link>
    </>
  )
}

export default Logo