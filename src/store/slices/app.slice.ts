import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/User.interface';
import { IUserInfo } from '../../interfaces/UserInfo.interface';

interface AppState {
  users: IUser[]
  userInfo: IUserInfo
  searchString: string
  loading: boolean
  userLoading: boolean
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
  userInfo: {} as IUserInfo,
  searchString: data.searchString ? data.searchString : '',
  loading: false,
  userLoading: false,
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
    fetchingUser(state) {
      console.log('true')
      state.userLoading = true
    },
    setUserInfo(state, action: PayloadAction<IUserInfo>) {
      console.log('false')
      state.userLoading = false;
      state.userInfo = action.payload
    },
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
    setPerPage(state, action: PayloadAction<number>) {
      state.perPage = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pagesCount = action.payload;
    },
    fetchingError(state) {
      state.loading = false;
    }
  }
});

export default appSlice.reducer
