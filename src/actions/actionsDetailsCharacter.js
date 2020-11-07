import {
  GET_DETAILS_CHARACTER,
  GET_DETAILS_CHARACTER_ERROR,
  GET_DETAILS_CHARACTER_LOADING
} from "./_actionTypes";
import {API, api} from "../utils/config";

export const getDetailsCharacterRequest = () => ({type: GET_DETAILS_CHARACTER_LOADING})
export const getDetailsCharacterSuccess = payload => ({type: GET_DETAILS_CHARACTER, payload})
export const getDetailsCharacterError   = payload => ({type: GET_DETAILS_CHARACTER_ERROR, payload})


export const getDetailsCharacter = (id = 1) => async (dispatch) => {
  dispatch(getDetailsCharacterRequest())
  try {
    const response = await api.get(`${API.CHARACTERS}/${id}`)
    dispatch(getDetailsCharacterSuccess(response.data))
  } catch (error) {
    await dispatch(getDetailsCharacterError(error))
  }
}
