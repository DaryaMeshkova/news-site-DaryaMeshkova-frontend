import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewsItem from '../../redux/containers/NewItem';
import { getNews } from '../../redux/actions/action';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const {
    news,
    error: postsFetchError,
    loading: isPostsFetching,
  } = useSelector((state) => state.newsPageReducer);

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
      {news.map((article) => (
        <NewsItem
          key={article.id}
          data={article}
        />
      ))}
    </>
  );
}
export default MainPage;
