import /* we need our action types here*/ { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {
      ...state,
      error: '',
      isLoading: true
    };
    case SUCCESS:
    return {
      ...state,
      error: '',
      isLoading: false,
      CharacterList: action.payload
    };
    case FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    };
    default:
      return state;
  }
};
