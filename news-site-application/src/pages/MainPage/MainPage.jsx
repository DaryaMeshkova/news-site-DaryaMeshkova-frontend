import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNews, getTags } from '../../redux/actionsCreator';

import NewsItem from '../../redux/containers/NewItem';
import Filter from '../../components/filter/Filter';
import Search from '../../components/search/Search';
import filteredNews from '../../utils';
import { getNumber } from '../../redux/actionsCreator';
import { FILTER_NEWS_ALL } from '../../constants';
import BasicPagination from '../../components/pagination/Pagination';
import ButtonEdit from '../../components/ButtonEdit';
import AddNewsModal from '../../components/addNewText/AddNewsModal';
import SelectTag from '../../components/selectTag/selectTag';

export default function MainPage() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [newText, setNewText] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(FILTER_NEWS_ALL);
  const [filtersNews, setFiltersNews] = useState([]);
  const [text, setText] = useState(1)
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getNews(text));
  }, [text]);

  useEffect(() => {
    dispatch(getNumber());
    dispatch(getTags())
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
    <div >

      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <AddNewsModal
      
      title={title}
      author={author}
      newText={newText}
      setTitle={setTitle}
      setAuthor={setAuthor}
      setNewText={setNewText}
      />
      {filtersNews.map((article) => (
        <> 
        <NewsItem
          key={article.id}
          data={article}
        />
        <ButtonEdit
        id={article.id}
        setText={setText}
        text={text}/>
        </>
      ))}
      <BasicPagination page={page} setPage={setPage}/>
    </div>
  );
}

