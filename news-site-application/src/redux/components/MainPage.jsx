import React from 'react';
import Button from '../containers/button';
import NewsItem from '../containers/NewItem';
import Loading from '../containers/Loading';

function MainPage() {
  return (
    <div>
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}
export default MainPage;
