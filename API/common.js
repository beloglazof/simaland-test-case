import axios from 'axios';

const host = `https://www.sima-land.ru/api/v3/`;

const request = axios.create({
  baseURL: host,
  headers: {
    'Accept': 'application/json'
  }
})

const get = (endpoint = '', params = {}) => {
  return request.get(endpoint, { params })
}

export const getCategory = async params => {
  const response = await get('category/', params);
  return response.data;
}

export const getItem = async params => {
  const response = await get('item/', params);
  return response.data;
}