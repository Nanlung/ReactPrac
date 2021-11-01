import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2019');

  const filterHandler = (year) => {
    setFilterYear(year);
  };

  const filteredYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterHandler} />
        <ExpensesList expenses={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
