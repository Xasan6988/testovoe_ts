import { AppDispatch } from '../index';
import axios from 'axios';
import {appSlice} from '../slices/app.slice';
import { IUser } from '../../interfaces/User.interface';
import {IRequest} from '../../interfaces/Request.interface';
import { IUserInfo } from '../../interfaces/UserInfo.interface';

export const getUsers = ({searchString, page = 1, perPage = 10, sort = false}: IRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(appSlice.actions.fetching())
      const res  = await axios.get<{total_count: number, items: IUser[]}>(`https://api.github.com/search/users?q=${searchString}&page=${page}&per_page=${perPage}${sort ? '&sort=repositories' : ''}${sort ? '&order=' + sort : ''}`);

      dispatch(appSlice.actions.setPageCount(res.data.total_count));

      if (sort === 'ASC') {
        dispatch(appSlice.actions.setUsers(res.data.items.reverse()));
      } else {
        dispatch(appSlice.actions.setUsers(res.data.items));
      }

    } catch (e: any) {
      dispatch(appSlice.actions.fetchingError())
      console.log(e.message);
    }
  }
}


export const getUserInfo = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(appSlice.actions.fetchingUser())
      const res = await axios.get<IUserInfo>(url);

      dispatch(appSlice.actions.setUserInfo(res.data));

    } catch (e: any) {
      dispatch(appSlice.actions.fetchingError());
      console.log(e.message);
    }
  }
}
