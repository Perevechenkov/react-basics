import { useState } from 'react';

import './ExpenseForm.scss';

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, title: event.target.value };
    });
  };

  const anountChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = { ...userInput, date: new Date(userInput.date) };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.amount}
            onChange={anountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-05-02'
            max='2024-12-31'
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
