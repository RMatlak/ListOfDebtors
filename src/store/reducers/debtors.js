import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  tasks: [],
};

const sendDebtorsSuccess = (state, action) => {
  const newTask = updateObject(action.tasks);
  return updateObject(state, {
    tasks: state.tasks.concat(newTask)
  })
}

const fetchDebtorsSuccess = (state, action) => {
  return updateObject(state, {
    tasks: action.tasks,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_DEBTORS_SUCCESS: return sendDebtorsSuccess(state, action)
        case actionTypes.FETCH_DEBTORS_SUCCESS:return fetchDebtorsSuccess(state, action)
    default:
      return state;
  }
};

export default reducer;
