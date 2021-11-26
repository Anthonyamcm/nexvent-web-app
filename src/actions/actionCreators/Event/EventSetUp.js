import {
    IMAGE_INFORMATION,
  } from '../../actionTypes/actionTypes';
  
  const saveImageInfo = (object) => (dispatch) => {
    dispatch({
      type: IMAGE_INFORMATION,
      payload: object,
    });
  };
  
  
  
  export {
    saveImageInfo,
  };