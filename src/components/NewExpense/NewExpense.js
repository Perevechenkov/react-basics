import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.scss';

export default function NewExpense(props) {
  return (
    <Card className='new-expense'>
      <ExpenseForm />
    </Card>
  );
}
