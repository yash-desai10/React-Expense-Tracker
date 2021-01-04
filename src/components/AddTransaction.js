import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import AddTranscationHeader from './AddTranscationHeader';

const AddTransaction = () => {

    const [incomeDescription,setIncomeDescription]=useState(""); // Current state for income description
    const [incomeAmount,setIncomeAmount]=useState(""); // Current state for income amount

    const [expenseDescription,setExpenseDescription]=useState(""); // Current state for income description
    const [expenseAmount,setExpenseAmount]=useState(""); // Current state for income amount

    const {addIncome,addExpense}=useContext(GlobalContext); // Importing Global State


    const onSubmitIncome = (event) => {
        event.preventDefault(); // Prevent browser from REFRESH / RELOAD

        const newIncomeTransaction= {
            id: Math.floor(Math.random() * 1000),
            incomeDescription,
            incomeAmount: incomeAmount * 1 // Multiply String with "1" to convert into number
        }  
    addIncome(newIncomeTransaction);
    
    setIncomeAmount(""); // Clear input field
    setIncomeDescription(""); // Clear input field
    }

    const onSubmitExpense = (event) => {
        event.preventDefault(); // Prevent browser from REFRESH / RELOAD

        const newExpenseTransaction= {
            id: Math.floor(Math.random() * 1000),
            expenseDescription,
            expenseAmount: expenseAmount * 1 // Multiply String with "1" to convert into number
        }

    addExpense(newExpenseTransaction);

    setExpenseAmount(""); // clear input field
    setExpenseDescription(""); // clear input field
    }

    return (
        <>
        <AddTranscationHeader />
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="form-control income">
                    <label htmlFor="amount">Income Amount</label>
                    <input type="number" value={incomeAmount} onChange = {(event) => setIncomeAmount(event.target.value)} placeholder="Enter income..." />
                    <label htmlFor="description">Description</label>
                    <input type="text" value={incomeDescription} onChange = {(event) => setIncomeDescription(event.target.value)} placeholder="Enter description..." />
                </div>
                <button className="button-submit">Add Income</button>
            </form>

            <form onSubmit={onSubmitExpense}>
                <div className="form-control expense">
                    <label htmlFor="amount">Expense Amount</label>
                    <input type="number" value={expenseAmount} onChange = {(event) => setExpenseAmount(event.target.value)} placeholder="Enter expense..." />
                    <label htmlFor="description">Description</label>
                    <input type="text" value={expenseDescription} onChange = {(event) => setExpenseDescription(event.target.value)} placeholder="Enter description..." />
                </div>
                <button className="button-submit">Add Expense</button>
            </form>
        </div>
        </>
    )
}

export default AddTransaction
