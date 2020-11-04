import {
  GET_DETAILS_CHARACTER,
  GET_DETAILS_CHARACTER_ERROR,
  GET_DETAILS_CHARACTER_LOADING
} from "../../actions/_actionTypes";

const initial = {
  character: null,
  error: null,
  loading: null
}

export const detailsCharacterReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_DETAILS_CHARACTER_LOADING: {
      return {
        loading: true,
        ...state
      };
    }
    case GET_DETAILS_CHARACTER: {
      return {
        loading: false,
        character: action.payload,
        ...state
      }
    }

    case GET_DETAILS_CHARACTER_ERROR: {
      return {
        loading: false,
        error: action.error,
        ...state
      }
    }
    default:
      return state;
  }
}
