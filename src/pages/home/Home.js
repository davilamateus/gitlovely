import React from 'react'
import Search from '../../components/search/Search'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='logo-search'>
          <img src="./../../../assets/img/logo.png" alt="Logo" className="logo" />
          <Search/>
        <div className="favourites">
        <Link to={'/favourites'}>
          
        <button>
          <img src="./../../../assets/img/favourite.png" alt="Favourite Icon" />
          My Favourites
        </button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Home