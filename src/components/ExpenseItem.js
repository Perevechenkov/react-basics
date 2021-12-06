// import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Dec 6th 2021</div>
      <div className='expense-item__description'>
        <h2>Forza Horizon 5</h2>
        <div className='expense-item__price'>100$</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
