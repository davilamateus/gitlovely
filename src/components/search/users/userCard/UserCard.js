import React, { useState, useEffect } from 'react'
import './userCard.css'
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {

  const [userIsFavourite, setUserIsFavourite] = useState(false)


  const listFavourites = JSON.parse(localStorage.getItem('favourites'));


  useEffect(() => {

    if(listFavourites !== null){

      
      listFavourites.map((item) => {
        if (item.login == user.login) {
          setUserIsFavourite(true)
        }
      })
    }

  }, [])



  function changeFavourite() {

    let temp = [];
    if (userIsFavourite) {
      listFavourites.map((item) => {
        if (item.login !== user.login) {
          temp.push(item)
        }
      });


    } else {
      temp = [...listFavourites, { login: user.login, html_url: user.html_url, avatar_url: user.avatar_url }]

    }
    localStorage.setItem('favourites', JSON.stringify(temp));

    window.location.reload();

  }








  return (
    <div className='user-box'>
      <div className="user-box-header">
        <img onClick={() => { changeFavourite() }} src={`./../../../assets/img/${userIsFavourite ? 'favouriteTrue' : 'favourite'}.png`} alt="Favourite Icon" />
        <div className="user-photo" style={{ backgroundImage: `url(${user.avatar_url})` }}></div>
        <a href={user.html_url}>
          <img src="./../../../assets/img/morebtn.svg" alt="More Icon" />
        </a>
      </div>
      <div className="user-box-detalls">
      <Link to={`/user/${user.login}`}>
        <h4 className='user-login'>{user.login}</h4>
      </Link>
        <a href={user.html_url} >{user.html_url}</a>
      </div>
      <Link to={`/user/${user.login}`}>
        <button className="view-profile">View Profile</button>
      </Link>
    </div>
  )
}

export default UserCard