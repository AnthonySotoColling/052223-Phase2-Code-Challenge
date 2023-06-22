import React, {useState} from "react";
import {transactionsAPI } from "./App";

function AddTransactionForm() {
  const [transactionDate, setTransactionDate] = useState("")
  const [transactionDescription, setTransactionDescription] = useState("")
  const [transactionCategory, setTransactionCategory] = useState("")
  const [transactionAmount, setTransactionAmount] = useState(0)
  function addTransaction(e) {

    console.log(transactionDate,transactionDescription, transactionCategory,transactionAmount)
    fetch(transactionsAPI,{
      method: "POST", 
      body: JSON.stringify({"date": transactionDate,
    "description": transactionDescription,
    "category": transactionCategory,
    "amount": transactionAmount,
    }),
      headers:{"Content-Type": "application/json"}})
      .then(r => {setTransactionDate("")
      setTransactionDescription("") 
      setTransactionCategory("") 
      setTransactionAmount(0)
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input onChange={(event) =>
          setTransactionDate(event.target.value)}type="date" name="date" />
          <input onChange={(event) =>
            setTransactionDescription(event.target.value)} type="text" name="description" placeholder="Description" />
          <input onChange={(event) =>
            setTransactionCategory(event.target.value)} type="text" name="category" placeholder="Category" />
          <input onChange={(event) =>
            setTransactionAmount(event.target.value) } type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button  onClick={addTransaction} className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
