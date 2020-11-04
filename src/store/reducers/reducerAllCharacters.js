import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_ERROR,
  GET_ALL_CHARACTERS_LOADING
} from "../../actions/_actionTypes";

const initial = {
  data: null,
  error: null,
  loading: null
}

export const charactersReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS_LOADING: {
      return {
        loading: true,
        ...state
      };
    }
    case GET_ALL_CHARACTERS: {
      return {
        loading: false,
        data: action.payload,
        ...state
      }
    }

    case GET_ALL_CHARACTERS_ERROR: {
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
