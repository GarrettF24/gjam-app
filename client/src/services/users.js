import api from "./apiConfig"
import jwtDecode from "jwt-decode"

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}