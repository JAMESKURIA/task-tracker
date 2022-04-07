import React from "react";

import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACTIONS } from "../utils/actions";

export const StorageContext = React.createContext({});

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.income: {
      return {
        ...state,
        username: action.payload.username,
        income: action.payload.income,
      };
    }

    case ACTIONS.currentUser: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case ACTIONS.expenses: {
      return {
        ...state,
        expenses: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

const StorageProvider = ({ children }) => {
  const initialState = {
    username: null,
    income: null,
    email: null,
    expenses: [],
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: false,
  });

  React.useEffect(() => {
    if (!state.email) {
      return;
    }

    // function to check if email is in the storage
    const containsObj = (_email, list) => {
      return list.some(
        (elem) => elem?.email?.toLowerCase() === _email?.toLowerCase()
      );
    };

    // get income for this user
    storage
      .getAllDataForKey("income")
      .then((incomes) => {
        if (containsObj(state.email, incomes)) {
          const userData = incomes.filter(
            (income) => income?.email === state?.email
          )[0];

          dispatch({
            type: ACTIONS.income,
            payload: { income: userData.income, username: userData.username },
          });
        }
      })
      .catch((err) => console.log("Error: ", err));

    // get expenses too
    storage
      .getAllDataForKey("expense")
      .then((expenses) => {
        if (containsObj(state.email, expenses)) {
          const mine = expenses.filter(
            (expense) =>
              expense.email.toLowerCase() === state?.email?.toLowerCase()
          );

          dispatch({ type: ACTIONS.expenses, payload: mine });
        }
      })
      .catch((err) => console.log("Error: ", err));
  }, [state.email]);

  return (
    <StorageContext.Provider value={{ storage, state, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
