import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Api from '../../api/Api';
import Header from '../../components/header/Header';
import Repositories from '../../components/user/repositories/RepositoriesList/RepositoriesList';
import UserProfile from '../../components/user/UserProfile/UserProfile';

const User = () => {

    const params = useParams() ;
    const userLogin = params.user;
    const [user,setUser] = useState([])

    useEffect(()=>{getUser()},[])

    async function getUser (){
        await Api.get(`/users/${userLogin}`).then((res)=>{setUser(res.data)}).catch((err)=>console.log(err))
    }

  return (
    <div>
        <div className="container">
        <Header/>
            <UserProfile user={user}/>
            <Repositories user={user.login} />
        </div>
    </div>
  )
}

export default User;