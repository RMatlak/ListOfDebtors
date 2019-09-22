import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  debts: []
};

const sendDebtsSuccess = (state, action) => {
  const newDebt = updateObject(action.debts);
  return updateObject(state, {
    debts: state.debts.concat(newDebt)
  });
};

const fetchDebtsSuccess = (state, action) => {
  return updateObject(state, {
    debts: action.debts
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_DEBTS_SUCCESS:
      return sendDebtsSuccess(state, action);
    case actionTypes.FETCH_DEBTS_SUCCESS:
      return fetchDebtsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
