import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Api from '../../Api/Api';
import Header from '../../components/header/Header';
import Repositories from '../../components/user/repositories/RepositoriesList/RepositoriesList';
import UserProfile from '../../components/user/UserProfile/UserProfile';

const User = () => {

    const params = useParams() 
    const userLogin = params.user;
    const [user,setUser] = useState([])


    async function getUser (){
        await Api.get(`/users/${userLogin}`).then((res)=>{setUser(res.data)}).catch((err)=>console.log(err))
    }

    useEffect(()=>{getUser()},[])
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

export default User