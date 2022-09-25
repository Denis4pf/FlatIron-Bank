import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("")
  return (
    <div>
 <Search search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />
      <TransactionsList transactions={transactions} setTransactions={setTransactions} search={search} setSearch={setSearch} />
   
    </div>
  );
}

export default AccountContainer;
