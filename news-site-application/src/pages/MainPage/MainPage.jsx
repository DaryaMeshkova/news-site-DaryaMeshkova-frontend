import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNews } from '../../redux/actions';

import NewsItem from '../../redux/containers/NewItem';
import Filter from '../../components/filter/Filter';
import Search from '../../components/search/Search';

import filteredNews from '../../utils';

import { FILTER_NEWS_ALL } from '../../constants';

function MainPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(FILTER_NEWS_ALL);
  const [filtersNews, setFiltersNews] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const {
    news,
    error: postsFetchError,
    loading: isPostsFetching,
  } = useSelector((state) => state.news);
  useEffect(() => {
    setFiltersNews(filteredNews(news, searchValue, filterValue));
  }, [searchValue, filterValue, news]);
  if (isPostsFetching) {
    return 'Loading...';
  }

  if (postsFetchError) {
    if (process.env.NODE_ENV !== 'production') {
      return `Error: ${postsFetchError.message}`;
    }
    return 'Error: hidden';
  }

  return (
    <>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {filtersNews.map((article) => (
        <NewsItem
          key={article.id}
          data={article}
        />
      ))}
    </>
  );
}
export default MainPage;
