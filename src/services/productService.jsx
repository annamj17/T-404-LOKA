/* eslint-disable no-console */
/* eslint-disable no-undef */

// GATEWAY ENDAPUNKTUR
const ENDPOINT = '';

export const getAllTagsForProduct = async photo => {
  console.log('YESBABY', photo);
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      payload: {
        image: {
          photo
        }
      }
    }
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData;
    })
    .catch(err => console.log(err));
};

export default getAllTagsForProduct;
