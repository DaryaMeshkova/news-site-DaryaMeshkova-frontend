const filteredNews = (news, searchValue, filterValue) => {
  const filterNews = {
    all: (item) => [
      item.title,
      item.text,
      item.author,
      item.tags,
    ],
    author: (item) => [
      item.author,
    ],
    tags: (item) => [
      item.tags,
    ],
  };
  if (!Object.keys(filterNews).includes(filterValue)) {
    return [];
  }
  const filterFields = filterNews[filterValue];
  const inputLC = searchValue.toLowerCase();
  console.log(news)
  const result = news.filter((newsItem) => (
    filterFields(newsItem)
      .map((item) => String(item).toLowerCase())
      .some((filterMapValueLC) => filterMapValueLC.includes(inputLC))
  ));
  return result;
};
export default filteredNews;
