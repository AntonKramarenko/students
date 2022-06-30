const BASE_URL = 'https://test-task-j.herokuapp.com/data'

export const GET_USERS = (page, size) => BASE_URL + `?page=${page}&size=${size}`

export const SEARCH_USERS = (value) => BASE_URL + `?search=${value}`

export const SORT_USERS = (sortBy = 'class', sortDir = [-1, 1]) => BASE_URL + `?sortBy=${sortBy}&sortDir=${sortDir}`