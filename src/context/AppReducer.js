import { ACTIONS } from "./Actions";

// maintains state change on specific event
export default (state,action) => {
    switch(action.type)
    {
        case ACTIONS.DELETE_TRANSACTION:
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload),
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !== action.payload)
            }
        case ACTIONS.ADD_INCOME:
            return{
                ...state,
                incomeTransactions:[action.payload,...state.incomeTransactions]
            }
        case ACTIONS.ADD_EXPENSE:
            return {
                ...state,
                expenseTransactions:[action.payload,...state.expenseTransactions]
            }
        default:
            return state;
    }
}