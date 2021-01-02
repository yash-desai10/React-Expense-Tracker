import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeHistory from './components/IncomeHistory';
import ExpenseHistory from './components/ExpenseHistory';
import {GlobalProvider} from './context/GlobalState';
import IncomeExpense from './components/IncomeExpense';

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense />
          <AddTransaction />
          <IncomeHistory />
          <ExpenseHistory />
      </div>
    </GlobalProvider>
  );
}

export default App;
