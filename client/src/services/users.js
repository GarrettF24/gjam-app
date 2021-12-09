import api from "./apiConfig"
import jwtDecode from "jwt-decode"

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/signin", credentials)
    localStorage.setItem("token", resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/signup", credentials)
    localStorage.setItem("token", resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const res = await api.get("/verify")
    return res.data
  }
  return false
}

export const getUser = async (id) => {
  try {
    const res = await api.get(`/users/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUserJams = async (id) => {
  try {
    const res = await api.get(`/users/${id}/jams`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCart = async (id) => {
  try {
    const res = await api.get(`/users/${id}/cart`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const addToCart = async (userId, item) => {
  try {
    const res = await api.post(`/users/${userId}/cart`, { id: item })
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const removeFromCart = async (userId, item) => {
  try {
    const res = await api.delete(`/users/${userId}/cart/${item}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const clearCart = async (userId) => {
  try {
    const res = await api.delete(`/users/${userId}/cart`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const removeAllFromCart = async (userId, item) => {
  try {
    const res = await api.delete(`/users/${userId}/cart/${item}`, { all: true })
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
