import React from 'react'
import { Link } from 'react-router-dom'

const PinCard = (props) => {
  const {
    id,
    name,
    imageGame,
    title,
    createAt,
    numberUsers,
    members,
    userId
  } = props
  return (
    <div className="column is-one-quarter">
      <Link to={`https://pwa2017-whats-going-on.firebaseio.com/Pin/${id}.json`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imageGame} alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{title}</p>
            <br />
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
              <br />
              <div><i className="fa fa-users middle"></i>{members.length}/{numberUsers} คน</div>
              <div><i className="fa fa-clock-o middle"></i>{createAt}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PinCard