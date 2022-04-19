import { createAction } from "../services/utils";
import actionTypes from "./constants";
import axios from "axios";

export const setLoader = createAction(actionTypes.CHANGE_LOADING);

export const startGame = createAction(actionTypes.START_GAME);

export const resetState = createAction(actionTypes.RESET_STATE);

export const increaseIndex = createAction(actionTypes.INCREASE_INDEX);

export const selectAnswer = (payload) => createAction(actionTypes.SELECTED_ANSWER, payload);

export const finishGame = createAction(actionTypes.FINISH_GAME);

const fetchQuestions = (payload) =>
  createAction(actionTypes.FETCH_QUESTIONS_SUCCESS, payload);

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      let questions = await axios.get("questions.json");
      const shuffledQuestions = questions.data.questions.sort(
        () => Math.random() - 0.5
      );
      dispatch(fetchQuestions(shuffledQuestions));
    } catch (e) {
      console.log(e);
    }
  };
};
