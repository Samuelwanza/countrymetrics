import axios from 'axios';

const BASE_URL = 'https://countryapi.io/api/all?apikey=4DmIt0di94qwm27FnSqtEFRaAK6pecuW7SZTUgd3';

const getRequest = async () => {
  const getcountries = await axios.get(
    BASE_URL,
  );
  const countryItems = Object.keys(getcountries.data).map((id) => {
    const item = getcountries.data[id];
    return { id, ...item };
  });
  return countryItems;
};

const postRequest = async (url, data) => axios.post(BASE_URL + url, data).then((res) => res.data);

const deleteRequest = async (url) => axios.delete(BASE_URL + url).then((res) => res.data);

export {
  getRequest,
  postRequest,
  deleteRequest,
};
