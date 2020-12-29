import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import TransactionHistory from './TransactionHistory';
import ExpenseHistoryHeader from './ExpenseHistoryHeader';

const Expense = () => {

    const {expenseTransactions}=useContext(GlobalContext);

    return ( 
        <div className="transactions-container">
            <div className="transactions-expense-container">
                <ExpenseHistoryHeader />
                <ul className="transaction-list">
                    {expenseTransactions.map(expenseTransaction => (
                        <TransactionHistory key={expenseTransaction.id}  expenseTransaction={expenseTransaction} />
                    ))} 
                </ul>
            </div> 
        </div>   
    )
}

export default Expense
