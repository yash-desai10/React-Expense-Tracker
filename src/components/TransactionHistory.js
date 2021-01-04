import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const TransactionHistory = ({
    incomeTransaction, 
    expenseTransaction, 
    isIncomeState 
}) => {

    const {deleteTransaction}=useContext(GlobalContext);

        return (
            <div>
                {/* Conditional rendering using ternary operator */}
                {isIncomeState ? <li className="income">
                    {incomeTransaction.incomeDescription ? incomeTransaction.incomeDescription : "<Empty>"} <span>${Math.abs(incomeTransaction.incomeAmount)}</span>
                    <button onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-item">x</button>
                </li> 
                
                :
                
                <li className="expense">
                    {expenseTransaction.expenseDescription ? expenseTransaction.expenseDescription : "<Empty>"} <span>${Math.abs(expenseTransaction.expenseAmount)}</span>
                    <button onClick={() => deleteTransaction(expenseTransaction.id)} className="delete-item">x</button>
                </li>}  
            </div>
        );

}

export default TransactionHistory
