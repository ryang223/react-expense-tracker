import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'; 

const Expenses = (props) =>{
  //every expense item is separately defined at different array points in order to 
  //be individually/statefully updated in ExpenseItem.js
  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter />
        <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}
      />  
      
        <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount} 
      date={props.items[1].date}
      />  
      
        <ExpenseItem 
      title={props.items[2].title} 
      amount={props.items[2].amount} 
      date={props.items[2].date}
      />  
      
        <ExpenseItem 
      title={props.items[3].title} 
      amount={props.items[3].amount} 
      date={props.items[3].date}
      />
    </Card>
    </div>
    );
};

export default Expenses