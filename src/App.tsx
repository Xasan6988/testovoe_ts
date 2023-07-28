import React, {useEffect} from 'react';
import './styles/App.scss';
import Users from './components/Users/Users';
import Select from './components/Select/Select';
import Search from './components/Search/Search';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {appSlice} from './store/slices/app.slice';

const App: React.FC = (): JSX.Element => {

  const {users, loading, page, perPage, searchString} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch()



  useEffect(() => {
    const data = {users, searchString, perPage, page}
    localStorage.setItem('data', JSON.stringify(data));
  }, [searchString, users, page, perPage]);

  useEffect(() => {
    dispatch(appSlice.actions.setPage(1));
  }, [searchString])

  return (
    <div className="App">
      <Search />
      {loading && <Loader/>}

      {!loading && <Users users={users} />}
      <div className="footer">
        <Navigation/>
        <Select/>
      </div>
    </div>
  );
}

export default App
