import './Expenses.sass';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
