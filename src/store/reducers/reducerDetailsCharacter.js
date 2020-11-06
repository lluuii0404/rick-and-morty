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
        ...state,
        loading: true,
      };
    }
    case GET_DETAILS_CHARACTER: {
      return {
        ...state,
        loading: false,
        character: action.payload,
      }
    }

    case GET_DETAILS_CHARACTER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    default:
      return state;
  }
}
