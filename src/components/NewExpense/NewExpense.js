import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setDisplay(false);
  };

  const showHandler = () => {
    setDisplay(true);
  };

  const hideHandler = () => {
    setDisplay(false);
  };

  return (
    <div className="new-expense">
      {!display && <button onClick={showHandler}>Add New Expense</button>}
      {display && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideHandler} />}
    </div>
  );
};

export default NewExpense;
