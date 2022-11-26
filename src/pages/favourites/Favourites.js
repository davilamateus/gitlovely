import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import UsersList from '../../components/search/users/usersList/UsersList';

const Favourites = () => {

    const listFavouriteLocal = localStorage.getItem('favourites');
    const [listFavourite , setListFavourite] = useState([])
    
    useEffect(()=>{
        getListFavourites()
    },[])

    function getListFavourites(){
        console.log('cliquasdsdei')
        if(listFavouriteLocal === null){
            localStorage.setItem('favourites',JSON.stringify(list))
        } 
    
    }


    const list = [
        {login:'luanpanno',html_url:'https://github.com/luanpanno', avatar_url:'https://avatars.githubusercontent.com/u/35155386?v=4'},
        {login:'mateus',html_url:'https://github.com/mateus', avatar_url:'https://avatars.githubusercontent.com/u/2091116?v=4'},
        {login:'pedro',html_url:'https://github.com/pedro', avatar_url:'https://avatars.githubusercontent.com/u/2248?v=4'},
        {login:'davilamateus',html_url:'https://github.com/davilamateus', avatar_url:'https://avatars.githubusercontent.com/u/15128918?v=4'}
    ]
    

    useEffect(()=>{
        setListFavourite(JSON.parse(listFavouriteLocal));
    },[listFavouriteLocal])










  return (
    <div className='container'>
        <Header/>
        <div className='list-favourite'>
            {listFavourite!== null ? 
            <UsersList usersList={listFavourite} reloader={getListFavourites}/>
            :''}
        </div>

    </div>
  )
}

export default Favourites