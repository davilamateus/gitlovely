import React, { useEffect, useState } from 'react';
import Api from '../../../../api/Api';
import RepositoriesCard from '../repositoriesCard/RepositoriesCard';
import './RepositoriesList.css';

const Repositories = ({user}) => {

    const [repositories,setRepositories] = useState([]);

    useEffect(()=>{
        if(user!== undefined){
            getRepositories();
        }
    },[user])

    async function getRepositories(){
        await Api.get(`/users/${user}/repos`).then((res)=>setRepositories(res.data))
    }

  return (
    <div className='repositories-list'>
        {repositories.length >0 ? 
        repositories.map((item)=>(
            <RepositoriesCard key={item.id} repositorie={item} />
            ))
            :''}
    </div>
  )
}

export default Repositories;