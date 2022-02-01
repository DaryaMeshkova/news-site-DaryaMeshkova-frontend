const filteredNews = (news, searchBarValue, filterValue) => {
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
  const inputLC = searchBarValue.toLowerCase();
  const result = news.filter((newsItem) => (
    filterFields(newsItem)
      .map((item) => String(item).toLowerCase())
      .some((filterMapValue) => filterMapValue.includes(inputLC))
  ));
  return result;
};
export default filteredNews;
