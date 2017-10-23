import ActionTypes from './action-types';

const addData = data => {
  return { type: ActionTypes.ADD_DATA, data };
};

const removeData = data => {
  return { type: ActionTypes.REMOVE_DATA, data };
};

export { ActionTypes, addData, removeData };

export default { ActionTypes, addData, removeData };
