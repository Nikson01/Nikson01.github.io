import actionTypes from "./constants";

const initState = {
  loading: false,
  questions: [],
  index: 0,
  selected: -1,
  level: [
    "500$",
    "1,000$",
    "2,000$",
    "4,000$",
    "8,000$",
    "16,000$",
    "32,000$",
    "64,000$",
    "125,000$",
    "$250,000",
    "$500,000",
    "$1,000,000",
  ],
};

const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case actionTypes.START_GAME:
      return {
        ...state,
        loading: false,
        index: 0
    };

    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: payload
      };

    case actionTypes.INCREASE_INDEX:
      return {
        ...state,
        index: state.index + 1,
        selected: -1,
      };

    case actionTypes.SELECTED_ANSWER:
      return {
        ...state,
        selected: payload,
      };

    case actionTypes.FINISH_GAME:
      return {
        ...state,
        selected: -1,
      };

    case actionTypes.RESET_STATE:
      return initState;

    default:
      return state;
  }
};

export default Reducer;
