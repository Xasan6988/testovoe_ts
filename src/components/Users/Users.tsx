import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { IUser } from '../../interfaces/User.interface';
import './Users.scss';
import { useAppSelector } from '../../hooks/redux';
import Modal from '../Modal/Modal';

const Data: React.FC<{ users: IUser[]}> = ({ users }: { users: IUser[]}): JSX.Element => {

  const [usersCards, serUsersCards] = useState<JSX.Element[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false)
  const { userInfo } = useAppSelector(state => state.app);

  const createCards = useCallback((data: IUser[]) => {
      serUsersCards(data.map(item => {
        return <li key={item.login}><Card {...item} setShowModal={setShowModal}/></li>
      }));
  }, [])

  useEffect(() => {
    createCards(users)
  }, [users])

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    }
    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener)
  }, [])

  return (
    <div className="users">
      {showModal && <Modal {...userInfo} setShowModal={setShowModal}/>}
      <ul className="users_list">
        {usersCards}
      </ul>
    </div>
  )
}

export default Data
