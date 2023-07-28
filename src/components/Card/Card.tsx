import React from 'react';
import { IUser } from '../../interfaces/User.interface';
import './Card.scss';

const Card: React.FC<IUser> = ({login, avatar_url}): JSX.Element => {

  return (
    <div className="Card">
      <a href='#'>
        <h1 className="Card_name">{login}</h1>
        <div className="Card_author">
          <img src={avatar_url} alt="profile_photo" className="author_avatar" />
          <p className="author_name">{login}</p>
        </div>
      </a>
    </div>
  )
}

export default Card;
