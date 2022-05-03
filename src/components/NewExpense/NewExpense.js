import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.scss';

export default function NewExpense(props) {
  const saveExpenseDateHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </Card>
  );
}
