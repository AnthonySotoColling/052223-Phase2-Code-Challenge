import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions,searchText}) {
  if (!transactions){
    return null;
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {
        transactions
        .filter((transaction => transaction.description.toLowerCase().startsWith(searchText.toLowerCase())) ) //(transaction =>  { return searchText.length > 0 ? transaction.description === searchText : true} )
        .map(transaction => <Transaction key={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount}/>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
