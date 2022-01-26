import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewsItem from '../containers/NewItem';
import { getNews } from '../actions/action';

function MainPage() {
  const dispatch = useDispatch();
  const newsarr = useSelector((store) => store.news);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div>
      {newsarr.map((article) => (
        <NewsItem
          key={article.id}
          data={article}
        />
      ))}
    </div>
  );
}
export default MainPage;
