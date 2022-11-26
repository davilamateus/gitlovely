import React from 'react'
import Search from '../search/Search'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to={'/'}>
          <img src="./../../../assets/img/logo.png" alt="Logo" className="logo" />
          <button>Home</button>
        </Link>
        <Search />
        <div className="favourites">
          <Link to={'/favourites'}>
            
          <button>
            <img src="./../../../assets/img/favourite.png" alt="Favourite Icon" />
            My Favourites
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header