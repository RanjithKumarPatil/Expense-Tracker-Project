import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {" "}
      <ExpenseDate date={props.date} />
      <div className="expense-item__descripton">
        {" "}
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
