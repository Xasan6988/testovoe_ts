import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/User.interface';

interface AppState {
  users: IUser[]
  searchString: string
  loading: boolean
  perPage: 10 | 25 | 50
  pagesCount: number
  page: number
}

const initialState: AppState = {
  users: [],
  searchString: '',
  loading: false,
  perPage: 10,
  pagesCount: 0,
  page: 1
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
    setPerPage(state, action: PayloadAction<10 | 25 | 50>) {
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
