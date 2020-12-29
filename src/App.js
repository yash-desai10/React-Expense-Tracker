import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import Income from './components/Income';
import Expense from './components/Expense';
import {GlobalProvider} from './context/GlobalState';
import IncomeExpense from './components/IncomeExpense';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Income />
        <Expense />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
