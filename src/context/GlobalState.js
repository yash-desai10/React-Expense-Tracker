import React,{createContext,useReducer} from 'react';
import { ACTIONS } from './Actions';
import AppReducer from './AppReducer';

// Initial State
const initialTransactionState = {
     incomeTransactions : [],
     expenseTransactions : []
}

// Context
export const GlobalContext=createContext(initialTransactionState);

// Provider Component
export const GlobalProvider = ({children}) => {

    // Reducer
    const [state,dispatch]=useReducer(AppReducer,initialTransactionState); 

    // Delete Transaction Action
    function deleteTransaction (id) {
        dispatch({
            type: ACTIONS.DELETE_TRANSACTION,
            payload: id
        });
    }

    // Add Income Action
    function addIncome (incomeTransaction) {
        dispatch({
            type: ACTIONS.ADD_INCOME,
            payload: incomeTransaction
        });
    }
    

    // Add Expense Action
    function addExpense (expenseTransaction) {
        dispatch({
            type: ACTIONS.ADD_EXPENSE,
            payload: expenseTransaction
        })
    }

    // Providing state to child components
    return (<GlobalContext.Provider value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense
        }}>
        {children}
    </GlobalContext.Provider>)
}
