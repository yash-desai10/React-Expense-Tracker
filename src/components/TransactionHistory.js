import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const List = ({
    incomeTransaction, 
    expenseTransaction, 
    isIncomeState 
}) => {

    const {deleteTransaction}=useContext(GlobalContext);
    
    // Checks if the current stateid "Income" it will display Income list otherwise Expense list
    if(isIncomeState)   
    {
        return (
            <div>
                <li className="income">
                    {incomeTransaction.incomeDescription} <span>${Math.abs(incomeTransaction.incomeAmount)}</span><button onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-item">x</button>
                </li> 
            </div>
        );
    }
    else{
        return (
            <div>
                <li className="expense">
                    {expenseTransaction.expenseDescription} <span>${Math.abs(expenseTransaction.expenseAmount)}</span><button onClick={() => deleteTransaction(expenseTransaction.id)} className="delete-item">x</button>
                </li> 
            </div>
        );
    }
  
}

export default List
