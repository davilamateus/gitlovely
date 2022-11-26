import React from 'react'
import './repositoriesCard.css'

const RepositoriesCard = ({repositorie}) => {
  return (
    <div className='repositorie-card'>
        <div className="repositorie-header">
            <h3>{repositorie.name}</h3>
            <span>{repositorie.description}</span>
        </div>
        <div className="repositorie-description">
            {repositorie.language !== null? 
            <div className="repositorie-language">
                <h5>{repositorie.language}</h5>
                <span>Language</span>
            </div>
                :''}
            <div className="repositorie-size">
                <h5>{repositorie.size}</h5>
                <span>Size</span>
            </div>
        </div>
        <a href={repositorie.html_url}>
        <button className="view-more">view-more</button>
        </a>

    </div>
  )
}

export default RepositoriesCard