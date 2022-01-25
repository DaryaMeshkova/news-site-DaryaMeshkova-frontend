import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../actions/action';

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
};
function NewsItem() {
  const dispatch = useDispatch();
  const article = useSelector((store) => store.news);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  if (!article) {
    return null;
  }
  return (
    <article style={articleStyle}>
      <div>
        <ul>
          {this.props.article.map((news, index) => (
            <li key={index}>
              <div>
                title is
                {news.title}
              </div>
              <div>
                text is
                {news.text}
              </div>
              <div>
                author is
                {news.author}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default NewsItem;
