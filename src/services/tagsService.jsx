import api from '../utils/api';

// Sends an image to the gateway and recieves all tags as response
export const getAllTagsForProduct = async image => {
  let response;

  try {
    response = await api.post(`/image`, { image });
  } catch (error) {
    return false;
  }
  const tags = response.data;
  return tags;
};

export default getAllTagsForProduct;
