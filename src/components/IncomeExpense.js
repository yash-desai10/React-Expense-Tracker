import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const IncomeExpense = () => {
    const {incomeTransactions,expenseTransactions}=useContext(GlobalContext);

    // fetching all income amount values of each transaction
    const incomeAmounts=incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount);
    const totalIncome=incomeAmounts.reduce((accumulator,item) => (accumulator+=item),0).toFixed(2);

    // fetching all expense amount values of each transaction
    const expenseAmounts=expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount);
    const totalExpense=expenseAmounts.reduce((accumulator,item) => (accumulator+=item),0).toFixed(2);

    return (
        <div className="income-expense-container">
            <div>
                <h4>Income</h4>
                <p className="display-income-amount">${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="display-expense-amount">${totalExpense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
