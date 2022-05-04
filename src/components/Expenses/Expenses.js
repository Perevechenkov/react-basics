import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.scss';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
