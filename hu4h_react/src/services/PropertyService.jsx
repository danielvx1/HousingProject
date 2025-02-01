import axios from 'axios';

const PROPERTIES_REST_API_URL = 'http://localhost:8080/api/properties'

export const listProperties = () => axios.get(PROPERTIES_REST_API_URL);