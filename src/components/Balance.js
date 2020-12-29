import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
    const {incomeTransactions,expenseTransactions}=useContext(GlobalContext);

    // fetching all amount values of each transaction
    const incomeAmounts=incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount);
    const totalIncome=incomeAmounts.reduce((accumulator,item) => (accumulator+=item),0).toFixed(2);

    const expenseAmounts=expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount);
    const totalExpense=expenseAmounts.reduce((accumulator,item) => (accumulator+=item),0).toFixed(2);

    
    return (
        <div className="balance">Balance : ${(totalIncome-totalExpense).toFixed(2)}</div>
    )
}

export default Balance
