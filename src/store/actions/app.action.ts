import { AppDispatch } from '../index';
import axios from 'axios';
import {appSlice} from '../slices/app.slice';
import { IUser } from '../../interfaces/User.interface';
import {IRequest} from '../../interfaces/Request.interface';

export const getUsers = ({searchString = 'Xasan6988', page = 1, perPage = 10, sort = false}: IRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(appSlice.actions.fetching())
      const res  = await axios.get<IUser[]>(`https://api.github.com/search/users?q=${searchString}&page=${page}&per_page=${perPage}${sort ? '&sort=true' : ''}`);

      if (sort === 'ASC') {
        dispatch(appSlice.actions.setUsers(res.data.reverse()));
      } else {
        dispatch(appSlice.actions.setUsers(res.data));
      }

    } catch (e: any) {
      dispatch(appSlice.actions.fetchingError())
      console.log(e.message);
    }
  }
}
