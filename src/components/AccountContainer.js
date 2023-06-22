import React,{useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer({transactions}) {
  const [searchText, setSearchText]=useState("")
  
  function onChange(e){
    setSearchText(e.target.value)
   
  }
  return (
    <div>
      <Search onChange={onChange}/>
      <AddTransactionForm />
      <TransactionsList searchText={searchText} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
