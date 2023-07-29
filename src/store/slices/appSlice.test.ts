import { IUserInfo } from '../../interfaces/UserInfo.interface'
import { appSlice } from './app.slice'

const initialState = {
  users:  [],
  userInfo: {} as IUserInfo,
  searchString:  '',
  loading: false,
  userLoading: false,
  perPage:  10,
  pagesCount: 0,
  page: 1
}

describe('getCounterValue', () => {
    test('loading', () => {
        expect(appSlice.reducer(initialState, appSlice.actions.fetching())).toEqual({...initialState, loading: true})
    })


    test('setSearchString', () => {
      expect(appSlice.reducer(initialState, appSlice.actions.setSearchString('Some string'))).toEqual({...initialState, searchString: 'Some string'})
    })
})
