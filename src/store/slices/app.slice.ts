import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

let initialState: AppState = {
  users: [],
  userInfo: {} as IUserInfo,
  searchString: '',
  loading: false,
  userLoading: false,
  perPage: 10,
  pagesCount: 0,
  page: 1
}

const localData = localStorage.getItem('data');
let data;

if (localData) {
  data = JSON.parse(localData);
  initialState = { ...data }
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
      state.userLoading = true
    },
    setUserInfo(state, action: PayloadAction<IUserInfo>) {
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
