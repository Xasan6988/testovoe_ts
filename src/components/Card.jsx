import React, { useState } from 'react';
import './Card.scss';

const Card = (props) => {

  return (
    <div className="Card">
      <a href='#'>
        <h1 className="Card_name">{props.project.login}</h1>
        <div className="Card_author">
          <img src={props.project.avatar_url} alt="profile_photo" className="author_avatar" />
          <p className="author_name">{props.project.login}</p>
        </div>
      </a>
    </div>
  )
}

export default Card;
