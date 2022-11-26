import {useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import './search.css';


const Search = () => {

    const [searchValue,setSearchValue] = useState('');
    const [error, setError] = useState(false);
    const params = useParams();
    const nav = useNavigate();
    
    useEffect(()=>{
        if(searchValue !== ''){
            setError(false);
        }
    },[searchValue]);
    
    function search(e){
        e.preventDefault();
        if(searchValue !== ''){
            nav(`/search/${searchValue}`);
        } else{
            setError(true);
        }
    };


    
  return (
    <div>
        <form className='form' onSubmit={(e)=>{search(e)}} >
            <label>
                <input 
                className='input-search' 
                onChange={(e)=> setSearchValue(e.target.value)} 
                type="text"  
                placeholder={params.search !== undefined ? params.search : 'Find a user here…'}/>
            </label>
            <button id={'search-btn'} className='search-btn'>Search</button>
        </form>
        <div className="error">
                {error ?   <span className="error-block">This field is required</span>:''}
        </div>
    </div>
  )
}

export default Search;