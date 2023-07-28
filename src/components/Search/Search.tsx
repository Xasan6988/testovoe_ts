import React, {useState} from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/actions/app.action';
import {appSlice} from '../../store/slices/app.slice';
import './Search.scss';


const Search: React.FC = (): JSX.Element => {

  const {searchString, perPage, page} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState(searchString);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(appSlice.actions.setSearchString(search))
      searchHandler()
    }
  }

  const searchHandler = () => {
    dispatch(getUsers({searchString: search ? search : "Xasan6988", page, perPage}))
  }

  useEffect(() => {
    setSearch(searchString)
  }, [searchString]);

  return(
    <div className='Search'>
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={keyDownHandler}
        placeholder={"Начните вводить текст для поиска (не менее трех символов)"}
      />
      <button className="search_button" onClick={() => {
        dispatch(appSlice.actions.setSearchString(search))
        searchHandler()
      }}></button>
    </div>
  )
}

export default Search;
