import api from '../utils/api';

// Sends edited tags to the gateway and recieves edited tags back
export const getAllTagsAfterEdit = async (editedProductTags, id) => {
  let response;

  try {
    response = await api.put(`/image/${id}`, editedProductTags);
  } catch (error) {
    return false;
  }
  const editedTags = response.data;
  return editedTags;
};

export default getAllTagsAfterEdit;
