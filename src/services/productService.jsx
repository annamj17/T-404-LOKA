/* eslint-disable no-undef */

// GATEWAY ENDAPUNKTUR
const ENDPOINT = '';

const getAllTagsForProduct = async () => {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {}
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData;
    });
};

export default { getAllTagsForProduct };
