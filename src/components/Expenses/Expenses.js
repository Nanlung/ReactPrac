import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2019');

  const filterHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
