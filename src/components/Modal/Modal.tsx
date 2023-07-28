import React, { useEffect } from 'react';
import { IUserInfo } from '../../interfaces/UserInfo.interface';

import './Modal.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/slices/app.slice';
import Loader from '../Loader/Loader';

const Modal: React.FC<IUserInfo & { setShowModal(value: boolean): void }> = ({ html_url, public_repos, followers, avatar_url, setShowModal }): JSX.Element => {

  const dispatch = useAppDispatch()
  const { userLoading } = useAppSelector(state => state.app);

  useEffect(() => {
    const disableScroll = () => {
      document.body.dataset.scrollY = window.scrollY.toString();

      const scrollWidth = window.innerWidth - document.body.offsetWidth;

      document.body.style.cssText = `
      overflow:hidden;
      top:-${window.scrollY}px;
      left:0;
      width:100%;
      position:fixed;
      height:100vh;
      padding-right: ${scrollWidth}px;
      `;
    };

    const enableScroll = () => {
      document.body.style.cssText = '';
      window.scroll({
        top: +document.body.dataset.scrollY!,
      })
    };

    disableScroll()

    return () => {
      enableScroll()
    }
  }, [])

  return (
    <div className="wrapper">
      {userLoading && <Loader />}
      {!userLoading &&
        <div className="modal">
          <div className="close">
            <button onClick={() => setShowModal(false)}>✕</button>
          </div>
          <a href={html_url}>
            <img className='avatar' src={avatar_url} alt="user_avatar" />
          </a>
          <p>Repos: {public_repos}</p>
          <p>Followers: {followers}</p>
        </div>
      }
    </div>
  )
}

export default Modal;
