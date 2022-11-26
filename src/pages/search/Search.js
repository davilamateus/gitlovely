import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UsersList from '../../components/search/users/usersList/UsersList';
import Api from '../../Api/Api';
import Header from '../../components/header/Header';
import './search.css';


const Search = () => {

  const params = useParams();
  const search = params.search;
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0);
  const [notFound, setNotFound] = useState(false);

  async function searchUsers() {

    await Api.get(`/search/users?q=${search}&per_page=12&page=${page}`)
      .then((res) => {
        setUsersList(res.data.items);
        if (res.data.items.length === 0) {
          setNotFound(true)
        } else { setNotFound(false) }
        setTotalCount(Math.floor(res.data.total_count))
      })
      .catch((err) => { console.log(err) })

  }
  useEffect(() => { searchUsers() }, [page, search]);


  function changePage(n) {

    if (page + (n) != 0) {
      setPage(page + (n))
    }
  }

  //Only the first 1000 search results are available



  return (



    <div className='container'>
      <Header />

      {notFound &&
        <div className='not-found'>
          <h4>Sorry no user found!</h4>
        </div>
      }
        <UsersList usersList={usersList} />
      <div className="pagination">
        {page > 1 ?
          <button onClick={() => { changePage(-1) }}>Back</button>
          : ''}
        {
          page !== 84 && page < totalCount / 12 ?
            <button onClick={() => { changePage(1) }}>Next</button>
            : ''}

      </div>
    </div>

  )
}

export default Search