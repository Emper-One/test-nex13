'use clients'
import axios from "axios"

export const getAll = async (limit = 10, page = 1) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
  return response
}

export const getById = async (id) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return response
}

export const getCommentsByPostId = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return response
}