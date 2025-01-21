import axios from 'axios'

const USERS_URL_REST_API = 'http://localhost:8080/api/auth/register'

export const createUser = (user) => axios.post(USERS_URL_REST_API, user);