// import logo from "./logo.svg";
// import "./index.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 2000,
      date: new Date(2020, 3, 23),
    },
    {
      id: "e1",
      title: "New TV",
      amount: 40000,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 20000,
      date: new Date(2021, 7, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 30000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get Started </h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
