import axios from 'axios';

const PROPERTIES_REST_API_URL = 'http://localhost:8080/api/properties'

export const listProperties = () => axios.get(PROPERTIES_REST_API_URL);

export const createProperty = (property) => axios.post(PROPERTIES_REST_API_URL, property);

export const getProperty = (propertyId) => axios.get(PROPERTIES_REST_API_URL + '/' + propertyId);

export const updateProperty = (propertyId, property) => axios.put(PROPERTIES_REST_API_URL + '/' + propertyId, property);

export const deleteProperty = (propertyId) => axios.delete(PROPERTIES_REST_API_URL + '/' + propertyId);