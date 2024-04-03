import axios from 'axios';
import { API } from '../config/constanst';

const getApi = async ({ url, info = {} }) => {
  const configData = {
    method: method,
    url: `${API}${url}`,
    info,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const { data } = await axios(configData);

    return data;
  } catch (error) {
    return error;
  }
};

export default getApi;
