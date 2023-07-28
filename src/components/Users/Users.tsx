import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { IUser } from '../../interfaces/User.interface';
import './Users.scss';

const Data: React.FC<{users: IUser[]}> = ({users}: {users: IUser[]}): JSX.Element => {

  const [usersCards, serUsersCards] = useState<JSX.Element[]>([]);

  const createCards = (data: IUser[]) => {
    serUsersCards(data.map(item => {
      return <li key={item.login}><Card {...item} /></li>
    }));
  };

  useEffect(() => {
    createCards(users)
  }, [users])

  return (
    <div className="users">
      <ul className="users_list">
        {usersCards}
      </ul>
    </div>
  )
}

export default Data
