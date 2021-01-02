import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import TransactionHistory from './TransactionHistory';
import IncomeHistoryHeader from './IncomeHistoryHeader';

const IncomeHistory = () => {

    const {incomeTransactions}=useContext(GlobalContext);

    return (
        <div className="transactions-container">
            <div className="transactions-income-container">
                <IncomeHistoryHeader />
                <ul className="transaction-list">
                    {incomeTransactions.map(incomeTransaction => (
                        <TransactionHistory key={incomeTransaction.id} isIncomeState={true} incomeTransaction={incomeTransaction} />
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default IncomeHistory
