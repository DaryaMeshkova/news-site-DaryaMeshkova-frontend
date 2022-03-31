import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_REJECTED, NEW_TEXT } from '../actionTypes';


const initialState = {
  news: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action = {}) => {


  switch (action.type) {
    case NEWS_REQUESTED:
      return { ...state, loading: true, error: null };
    case NEWS_RECEIVED:
      return {
        ...state, news: action.payload, loading: false, error: null,
      };
      case NEW_TEXT:
        
        return {
          ...state,
          news: state.news.map((element) => {
            if(action.payload.id !== element.id) return element 
            return{
              id:element.id,
              title:element.title,
              author:element.author,
              tags:element.tags,
              text:action.payload.text
            }
          })
        }
   

    default:
      return state;
  }
};

export default newsReducer;
