const ENDPOINT = '';

const getAllCinemas = async () => {
  // eslint-disable-next-line no-undef
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {}
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData;
    });
};

export default getAllCinemas;
