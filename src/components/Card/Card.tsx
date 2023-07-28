import React from 'react';
import { IUser } from '../../interfaces/User.interface';
import { useAppDispatch } from '../../hooks/redux';
import { getUserInfo } from '../../store/actions/app.action';
import './Card.scss';

const Card: React.FC<IUser & { setShowModal(value: boolean): void }> = ({ url, login, avatar_url, setShowModal }): JSX.Element => {

  const dispatch = useAppDispatch();


  const clickHandler = (url: string) => {
    dispatch(getUserInfo(url))
    setShowModal(true)
  }

  return (
    <div className="Card" onClick={() => clickHandler(url)}>
      <h1 className="Card_name">{login}</h1>
      <div className="Card_author">
        <img src={avatar_url} alt="profile_photo" className="author_avatar" />
        <p className="author_name">{login}</p>
      </div>
    </div>
  )
}

export default Card;
