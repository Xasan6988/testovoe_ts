import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/User.interface';

interface AppState {
  users: IUser[]
  searchString: string
  loading: boolean
  perPage: number
  pagesCount: number
  page: number
}

const localData = localStorage.getItem('data');
let data;
if (localData) {
  data = JSON.parse(localData);
}

const initialState: AppState = {
  users: data.users ? data.users : [],
  searchString: data.searchString ? data.searchString : '',
  loading: false,
  perPage: data.perPage ? data.perPage : 10,
  pagesCount: 0,
  page: data.page ? data.page : 1
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload
    },
    setPerPage(state, action: PayloadAction<number>) {
      state.perPage = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    fetchingError(state) {
      state.loading = false;
    }
  }
});

export default appSlice.reducer
