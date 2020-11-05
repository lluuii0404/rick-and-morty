import axios from "axios";

export const config = {
  apiUrl: 'https://rickandmortyapi.com/api'
}

export const API = {
  URL: `${config.apiUrl}`,
  CHARACTERS: '/character'
}

export const api = axios.create({
  baseURL: API.URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})
