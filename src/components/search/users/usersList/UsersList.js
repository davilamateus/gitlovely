import UserCard from '../userCard/UserCard'
import './usersList.css'


const UsersList = ({usersList, }) => {



  


  return (
    <div className='user-list container'>
        {usersList.map((user)=> <UserCard key={user.id} user={user}/>)}
    </div>
  )
}

export default UsersList