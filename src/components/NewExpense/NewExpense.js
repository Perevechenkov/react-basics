import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.scss';

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleFormEditingHandler();
  };

  const toggleFormEditingHandler = () => {
    setIsEditing(curState => !curState);
  };

  return (
    <Card className='new-expense'>
      {isEditing ? (
        <ExpenseForm
          onCancel={toggleFormEditingHandler}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      ) : (
        <button onClick={toggleFormEditingHandler}>Add New Expense</button>
      )}
    </Card>
  );
}
