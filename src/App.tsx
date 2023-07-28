import React, {useEffect} from 'react';
import './styles/App.scss';
import Data from './components/Data';
import Select from './components/Select';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {appSlice} from './store/slices/app.slice';

const App: React.FC = (): JSX.Element => {

  const {users, loading, page, perPage, searchString} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const localData = localStorage.getItem('data');
    if (localData) {
      const data = JSON.parse(localData);
      dispatch(appSlice.actions.setPage(data.users))
      dispatch(appSlice.actions.setSearchString(data.searchString))
      dispatch(appSlice.actions.setPerPage(data.perPage))
      dispatch(appSlice.actions.setPage(data.page))
    }
  }, [])

  useEffect(() => {
    const data = {users, searchString, perPage, page}
    localStorage.setItem('data', JSON.stringify(data));
  }, [searchString, perPage, page, users]);

  useEffect(() => {
    dispatch(appSlice.actions.setPage(1));
  }, [searchString])

  return (
    <div className="App">
      <Search />
      {loading && <Loader/>}
      {!loading && <Data data={users}/>}
      <div className="footer">
        <Navigation/>
        <Select/>
      </div>
    </div>
  );
}

export default App
