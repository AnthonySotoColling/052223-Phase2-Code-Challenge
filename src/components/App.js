import React, {useEffect, useState} from "react";
import AccountContainer from "./AccountContainer";
 export const transactionsAPI = "http://localhost:8001/transactions"
function App() {
  const [transactions, setTransactions]=useState(null)
  

  useEffect(() => {
  fetch(transactionsAPI)
  .then(r => r.json())
  .then(data => setTransactions(data))},[])



  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} />
    </div>
  );
}

export default App;
