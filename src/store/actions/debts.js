import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const sendDebtsSuccess = (id, debts) => {
  return {
    type: actionTypes.SEND_DEBTS_SUCCESS,
    debts: debts,
    debtId: id
  };
};

export const sendDebts = (debts, token) => {
  return dispatch => {
    axios.post("/debts.json?auth=" + token, debts).then(response => {
      dispatch(sendDebtsSuccess(response.data.name, debts));
    });
  };
};

export const fetchDebtsSuccess = debts => {
  return {
    type: actionTypes.FETCH_DEBTS_SUCCESS,
    debts: debts
  };
};

export const fetchDebts = (token, userId) => {
  return dispatch => {
    const queryParams =
      "?auth" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get("/debts.json" + queryParams).then(response => {
      if (response.data === null) {
        const fetchedDebts = [];
      }else {
        const fetchedDebts = [];
      for (let key in response.data) {
        fetchedDebts.push({
          ...response.data[key],
          id: key
        })};
      
      dispatch(fetchDebtsSuccess(fetchedDebts));
      }
    });
  };
};
