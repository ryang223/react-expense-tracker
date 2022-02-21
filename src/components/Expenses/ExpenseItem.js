import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const [title, setTitle] =  useState(props.title);

        //the ES6 version of calling this function throws an unexpected token error so stick to 
        //the ES5 variant for compilation's sake
        function clickHandler() {
        setTitle('Updated!');
        console.log(title);
    }; 

    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;