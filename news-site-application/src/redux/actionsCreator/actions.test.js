import {newText, saveChange, receiveTags} from "../actionsCreator";

import {NEW_TEXT, SAVE_CHANGE, TAGS_RECEIVED} from '../actionTypes'

describe("action creators for News", () => {
  const MOCK_ACTION_PAYLOAD = "some string";
  const actionCreator = (type, payload) => ({
    type,
    ...(payload && { payload }),
  });

  test("getNews should return action object", () => {
    expect(newText().payload).toBeFalsy();

    expect(newText()).toEqual(actionCreator(NEW_TEXT));
  });

  test("setNews should return action object", () => {
    expect(saveChange(MOCK_ACTION_PAYLOAD).payload).toBe(MOCK_ACTION_PAYLOAD);

    expect(saveChange(MOCK_ACTION_PAYLOAD)).toEqual(
      actionCreator(SAVE_CHANGE, MOCK_ACTION_PAYLOAD)
    );
  });

  test("getNewsError should return action object", () => {
    expect(receiveTags(MOCK_ACTION_PAYLOAD).payload).toBe(MOCK_ACTION_PAYLOAD);

    expect(receiveTags(MOCK_ACTION_PAYLOAD)).toEqual(
      actionCreator(TAGS_RECEIVED, MOCK_ACTION_PAYLOAD)
    );
  });

});