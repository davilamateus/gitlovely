import './userProfile.css'

const UserProfile = ({ user }) => {

    return (
        <div className='user-profile'>
            <div className="user-photo" style={{ backgroundImage: `url(${user.avatar_url})` }}></div>
            <div className="user-name">
                <h2>{user.name}</h2>
                <a href={user.html_url}>
                    {user.login}
                </a>
            </div>
            <div className="followers">
                <h4>{user.followers}</h4>
                <span>Followers</span>
            </div>
            <div className="followings">
                <h4>{user.following}</h4>
                <span>Following</span>
            </div>
            <div className="repositories">
                <h4>{user.public_repos}</h4>
                <span>Repositories</span>
            </div>
        </div>
    )
}

export default UserProfile