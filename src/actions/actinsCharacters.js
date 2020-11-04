import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_ERROR,
  GET_ALL_CHARACTERS_LOADING
} from "./_actionTypes";
import { API, api } from "../utils/config";

export const getCharactersRequest = () => ({type: GET_ALL_CHARACTERS_LOADING})
export const getCharactersSuccess = payload => ({type: GET_ALL_CHARACTERS, payload})
export const getCharactersError   = payload => ({type: GET_ALL_CHARACTERS_ERROR, payload})

export const getCharacters = () => async (dispatch) => {
  dispatch(getCharactersRequest())

  try {
    const response = await api.get(`${API.CHARACTERS}`)
    dispatch(getCharactersSuccess(response.data))
  } catch (error) {
    await dispatch(getCharactersError(error))
  }
}


