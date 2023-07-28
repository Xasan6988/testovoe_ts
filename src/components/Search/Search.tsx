import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/actions/app.action';
import { appSlice } from '../../store/slices/app.slice';
import './Search.scss';


const Search: React.FC = (): JSX.Element => {

  const { searchString, perPage, page } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState(searchString);
  const [filter, setFilter] = useState<'ASC' | 'DESC' | false>(false);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(appSlice.actions.setSearchString(search))
      searchHandler()
    }
  }

  const searchHandler = () => {
    dispatch(getUsers({ searchString: search ? search : "Xasan6988", page, perPage, sort: filter }))
  }

  const filterHandler = (filterValue: typeof filter) => {
    setFilter(filterValue);
    dispatch(getUsers({ searchString: search ? search : "Xasan6988", page, perPage, sort: filterValue }))
  }

  useEffect(() => {
    setSearch(searchString)
  }, [searchString]);

  return (
    <div className="Search">
      <div className='search_filed'>
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
      <div className="search_filters">
        <button className={`filter_btn${filter === 'ASC' ? '_active' : ''}`} onClick={() => filterHandler('ASC')}>По возрастанию</button>
        <button className={`filter_btn${filter === 'DESC' ? '_active' : ''}`} onClick={() => filterHandler('DESC')}>По убыванию</button>
        <button className='filter_btn' onClick={() => filterHandler(false)}>Сбросить фильтры</button>
      </div>
    </div>

  )
}

export default Search;
