import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/actions/app.action';
import {appSlice} from '../../store/slices/app.slice';
import './Select.scss';

const Select: React.FC = (): JSX.Element => {

  const {searchString, page, perPage} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch()

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget;
    dispatch(appSlice.actions.setPerPage(+target.value));
    dispatch(getUsers({searchString, page, perPage: +target.value}))
  }

  return(
    <div className="Select">
      <select value={perPage} onChange={changeHandler}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  )
}

export default Select;
