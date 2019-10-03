import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const sendDebtorsSuccess = (id, tasks) => {
  return {
    type: actionTypes.SEND_DEBTORS_SUCCESS,
    tasks: tasks,
    taskId: id
  };
};

export const sendDebtors = (tasks, token) => {
  return dispatch => {
    axios.post("/debtors.json?auth=" + token, tasks).then(response => {
      dispatch(sendDebtorsSuccess(response.data.name, tasks));
    });
  };
};

export const fetchDebtorsSuccess = tasks => {
  return {
    type: actionTypes.FETCH_DEBTORS_SUCCESS,
    tasks: tasks
  };
};

export const fetchDebtors = (token, userId) => {
  return dispatch => {
    const queryParams =
      "?auth" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get("/debtors.json" + queryParams).then(response => {
      if (response.data === null) {
        const fetchedTasks = [];
      } else {
        const fetchedTasks = [];
        console.log(response.data);
        for (let key in response.data) {
          fetchedTasks.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchDebtorsSuccess(fetchedTasks));
      }
    });
  };
};

