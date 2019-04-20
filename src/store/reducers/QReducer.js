import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASK_Q:
      return {
        ...state,
        questions: state.questions.concat(action.payload)
      };

    case actionTypes.FETCH_Q:
      return {
        ...state,
        questions: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
