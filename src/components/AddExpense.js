import Card from "./Card";
import "./css/AddExpense.css";
import { useState } from "react";

const AddExpense = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const submitHandler = () => {
    props.func(name, price, date);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };
  return (
    <Card className="addexpense">
      {!isEditing && (
        <div className="btnaddexp">
          <button onClick={startEditing}>Ajouter une dépense</button>
        </div>
      )}
      {isEditing && (
        <div>
          <input
            type="text"
            name="expenseName"
            placeholder="Nom"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="expensePrice"
            placeholder="prix"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="datetime-local"
            name="expenseDate"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <button onClick={submitHandler}> ajouter </button>
        </div>
      )}
    </Card>
  );
};

export default AddExpense;
