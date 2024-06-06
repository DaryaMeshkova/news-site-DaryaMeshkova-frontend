import { newsReducer, initialState } from "./newsPageReducer";
import { NEWS_RECEIVED } from "../../redux/actionTypes";

describe("state in newsReducer", () => {
  const MOCK_ACTION_PAYLOAD = [
    {
      id: 0,
      title: "title",
      text: "description",
      author: "author",
      tags: "tags",
    },
    {
      id: 1,
      title: "title",
      text: "description",
      author: "author",
      tags: "tags",
    },
    {
      id: 2,
      title: "title",
      text: "sdescription",
      author: "author",
      tags: "tags",
    },
  ];

  test("should return the initial state", () => {
    expect(newsReducer()).toEqual(initialState);
    expect(newsReducer(undefined, {})).toEqual(initialState);
    expect(newsReducer(undefined, null)).toEqual(initialState);
    expect(newsReducer(undefined, undefined)).toEqual(initialState);
  });

  test("should return new object with payload", () => {
    expect(
      newsReducer(initialState, { type: NEWS_RECEIVED, payload: MOCK_ACTION_PAYLOAD })
    ).toHaveProperty("news", MOCK_ACTION_PAYLOAD);
    expect(
      newsReducer(initialState, { type: NEWS_RECEIVED, payload: MOCK_ACTION_PAYLOAD })
    ).toHaveProperty("loading", false);   
  });
});