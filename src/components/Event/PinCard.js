import React from 'react'
import { Link } from 'react-router-dom'

const PinCard = (props) => {
  const {
    pinId,
    name,
    imageGame,
    title,
    createAt,
    numberOfUsers,
    members,
    userId
  } = props
  
  return (
    <div className="column is-one-quarter">
      <Link to={`/events/${pinId}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={imageGame} alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{title}</p>
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={`http://graph.facebook.com/${userId}/picture?type=normal`} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{name}</p>
              </div>
            </div>
            <div className="content">
              <div><i className="fa fa-users middle"></i>{members.length}/{numberOfUsers} คน</div>
              <div><i className="fa fa-clock-o middle"></i>{createAt}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PinCard