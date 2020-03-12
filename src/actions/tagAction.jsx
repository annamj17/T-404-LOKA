/* eslint-disable import/prefer-default-export */
import getAllTagsForProduct from '../services/productService';
import * as constants from '../constants/index';

const getTagsSuccess = tags => {
  return {
    type: constants.GET_ALL_TAGS,
    payload: tags
  };
};

export const getTags = () => {
  return async dispatch => {
    return getAllTagsForProduct.getTags().then(tagsObject => {
      dispatch(getTagsSuccess(tagsObject));
    });
  };
};
