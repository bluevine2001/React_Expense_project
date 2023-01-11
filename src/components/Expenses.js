import { useState } from "react";
import AddExpense from "./AddExpense";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import Filter from "./Filtreannee";
import "./css/Expenses.css";
import ApiFetching from "./ApiFetching";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState();

  const filteredItems = props.items.filter((el) => {
    if (!selectedFilter) return true;
    return el.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ApiFetching />
      <Filter setYear={setSelectedFilter} />
      <AddExpense func={props.func} />
      {filteredItems.map((el) => (
        <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          key={el.id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
