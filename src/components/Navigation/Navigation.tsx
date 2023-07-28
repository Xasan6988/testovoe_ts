import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/slices/app.slice';
import { getUsers } from '../../store/actions/app.action';
import './Navigation.scss';

const Navigation: React.FC = (): JSX.Element => {

  const { searchString, perPage, page, pagesCount } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget;
    dispatch(appSlice.actions.setPage(+target.value));
    dispatch(getUsers({ searchString, page: +target.value, perPage }));
  }

  return (
    <div className="Navigation">
      <button
        className="navigation_btn-prev"
        disabled={page === 1 ? true : false}
        onClick={() => {
          dispatch(appSlice.actions.setPage(page - 1))
          dispatch(getUsers({ searchString, page: page - 1, perPage }))
        }}
      ></button>

      <button
        className={"navigation_btn-page " + (page === 1 ? 'active_page' : '')}
        onClick={(e) => clickHandler(e)}
      >{page === 1 ? 1 : page - 1}</button>
      <button
        className={"navigation_btn-page " + (page !== 1 ? "active_page" : '')}
        onClick={(e) => clickHandler(e)}
      >{page !== 1 ? page : page + 1}</button>
      <button
        className="navigation_btn-page"
        onClick={(e) => clickHandler(e)}
      >{page !== 1 ? page + 1 : page + 2}</button>
      <button
        className="navigation_btn-next"
        disabled={page === pagesCount ? true : false}
        onClick={() => {
          dispatch(appSlice.actions.setPage(page + 1))
          dispatch(getUsers({ searchString, page: page + 1, perPage }))
        }}
      ></button>
    </div>
  )
};

export default Navigation;
