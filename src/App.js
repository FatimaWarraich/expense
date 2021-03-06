import React from 'react';
import './App.css';

// Import Components
import { Header } from './components/Header';
import {Balance } from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';

//import Provider
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <div>
    <GlobalProvider>
     <Header />
       <div className="container">
        <Balance />  
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
       </div>
      </GlobalProvider>
    </div> 

  );
}

export default App;
