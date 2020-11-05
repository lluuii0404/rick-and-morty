import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_ERROR,
  GET_ALL_CHARACTERS_LOADING
} from "./_actionTypes";
import { API, api } from "../utils/config";
import { setQueryParams, removeQuestionFromQueryString } from "../utils/helper";

export const getCharactersRequest = () => ({type: GET_ALL_CHARACTERS_LOADING})
export const getCharactersSuccess = payload => ({type: GET_ALL_CHARACTERS, payload})
export const getCharactersError   = payload => ({type: GET_ALL_CHARACTERS_ERROR, payload})


export const getCharacters = (search= {}) => async (dispatch) => {
  const s = removeQuestionFromQueryString(search)

  const searchParams = setQueryParams(s)

  const url = Object.keys(search).length > 0
    ? `${API.CHARACTERS}/?${searchParams}`
    : `${API.CHARACTERS}`;

  // console.log(">>> ", url, " <<< url <<<");

  dispatch(getCharactersRequest())

  try {
    const response = await api.get(url)
    dispatch(getCharactersSuccess(response.data))
  } catch (error) {
    await dispatch(getCharactersError(error))
  }
}


