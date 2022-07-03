const BASE_URL = 'https://test-task-j.herokuapp.com/data'

export const GET_STUDENTS_INFO_URL = (page, size, search, sortName, sortDir) => BASE_URL + `?page=${ page }&size=${ size }&search=${ search }&sortBy=${ sortName }&sortDir=${ sortDir }`