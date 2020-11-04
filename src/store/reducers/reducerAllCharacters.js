import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_ERROR,
  GET_ALL_CHARACTERS_LOADING
} from "../../actions/_actionTypes";

const initial = {
  data: null,
  error: null,
  loading: false
}

export const charactersReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ALL_CHARACTERS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }

    case GET_ALL_CHARACTERS_ERROR: {
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
